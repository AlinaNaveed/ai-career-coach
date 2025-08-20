"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function AddCommunityQuestionForm() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later you can connect this with your DB or API 🚀
    console.log("New community question:", { question, answer });

    setSubmitted(true);
    setQuestion("");
    setAnswer("");
  };

  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">Add a Custom Question</h2>
        {submitted && (
          <p className="text-green-600 mb-3">
            ✅ Question submitted! Thanks for contributing.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            placeholder="Enter your question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <Textarea
            placeholder="Enter the correct answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">
            Submit Question
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
