"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { chat } from "@/ai/flows/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const chatSchema = z.object({
  message: z.string().min(1, "Message cannot be empty."),
});

type ChatFormValues = z.infer<typeof chatSchema>;

interface Message {
  sender: "user" | "bot";
  text: string;
}

export function AIBot() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I'm your MediConnect assistant. How can I help you plan your medical journey to India today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ChatFormValues>({
    resolver: zodResolver(chatSchema),
    defaultValues: { message: "" },
  });

  const onSubmit = async (data: ChatFormValues) => {
    setIsLoading(true);
    const userMessage: Message = { sender: "user", text: data.message };
    setMessages((prev) => [...prev, userMessage]);
    form.reset();

    try {
      const response = await chat({ message: data.message });
      const botMessage: Message = { sender: "bot", text: response.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = { sender: "bot", text: "I'm sorry, I'm having trouble connecting. Please try again in a moment." };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">AI Medical Assistant</CardTitle>
            <CardDescription>Ask me anything about planning your medical travel to India.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[500px] flex flex-col">
              <ScrollArea className="flex-1 p-4 border rounded-md mb-4 bg-muted/20">
                <div className="space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start gap-3",
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      )}
                    >
                      {msg.sender === "bot" && (
                        <Avatar className="h-8 w-8">
                           <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={cn(
                          "max-w-xs md:max-w-md rounded-lg p-3 text-sm",
                          msg.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                      >
                        {msg.text}
                      </div>
                       {msg.sender === "user" && (
                        <Avatar className="h-8 w-8">
                           <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                   {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                        <Avatar className="h-8 w-8">
                           <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="bg-muted rounded-lg p-3">
                           <Loader2 className="h-5 w-5 animate-spin"/>
                        </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-2">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormControl>
                          <Input placeholder="Type your message..." {...field} disabled={isLoading} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
