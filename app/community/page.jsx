"use client";
import { useEffect, useState } from "react";
import { getCommunityQuestions } from "@/actions/community";

export default function CommunityPage() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getCommunityQuestions();
      setQuestions(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Community Questions</h1>

      {questions.length === 0 ? (
        <p className="text-gray-500">No questions yet.</p>
      ) : (
        <ul className="space-y-4">
          {questions.map((q) => (
            <li key={q.id} className="border p-4 rounded">
              <p className="font-medium">{q.question}</p>
              <p className="text-sm text-gray-500">
                Asked by {q.user?.name || q.user?.id || "Anonymous"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
