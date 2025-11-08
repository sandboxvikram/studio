"use client";

import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';
import { auth } from '@/lib/firebase/client';
import { HeartPulse } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAuth = async (isSignUp: boolean) => {
    setLoading(true);
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast({ title: "Account Created", description: "You have been successfully signed up." });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast({ title: "Signed In", description: "You have been successfully signed in." });
      }
      router.push('/');
    } catch (error: any) {
      toast({ variant: "destructive", title: "Authentication Failed", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/50 p-4">
       <div className="absolute top-8 left-8">
          <Link href="/" className="flex items-center space-x-2 text-foreground/80 hover:text-foreground">
            <HeartPulse className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl font-headline">MediConnect</span>
          </Link>
        </div>
      <Tabs defaultValue="login" className="w-full max-w-sm">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Enter your credentials to access your account.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button onClick={() => handleAuth(false)} disabled={loading} className="w-full">
                {loading ? 'Logging in...' : 'Login'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Create a new account to get started.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <Button onClick={() => handleAuth(true)} disabled={loading} className="w-full">
                {loading ? 'Signing up...' : 'Sign Up'}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
