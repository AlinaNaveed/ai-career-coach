import AddCommunityQuestionForm from "@/components/AddCommunityQuestionForm";

export default function CommunityPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Community Questions</h1>
      <p className="text-gray-600 mb-6">
        Share your own interview questions and learn from others!
      </p>
      <AddCommunityQuestionForm />
    </div>
  );
}
