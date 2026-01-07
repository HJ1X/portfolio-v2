"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background px-7 lg:px-8">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center"
          >
            <AlertCircle className="w-10 h-10 text-red-600 dark:text-red-400" />
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="space-y-3"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-wide">
              Something went wrong
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-medium">
              An unexpected error occurred. Don't worry, it's not your fault.
            </p>
          </motion.div>

          {/* Error Details (optional, for development) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              className="w-full max-w-lg p-4 rounded-xl bg-muted/50 border border-border"
            >
              <p className="text-sm text-muted-foreground font-mono text-left break-words">
                {error.message}
              </p>
            </motion.div>
          )}

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-4"
          >
            <Button
              onClick={reset}
              size="lg"
              variant="default"
              className="w-full sm:w-auto"
            >
              <RefreshCw className="w-4 h-4" />
              Try again
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <Link href="/">
                <Home className="w-4 h-4" />
                Go home
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
