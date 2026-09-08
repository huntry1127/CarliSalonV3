"use client";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AdminLogin() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    window.location.href = "/admin";
  }

  return (
    <main className="admin-auth">
      <section className="admin-auth__card">
        <p className="admin-kicker">CARLISPECIAL</p>
        <h1>Owner Login</h1>
        <p>Sign in to manage the website and access GlossGenius booking management.</p>
        <form onSubmit={submit}>
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Password
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          {error && <div className="admin-error">{error}</div>}
          <button className="admin-button" disabled={loading}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>
      </section>
    </main>
  );
}
