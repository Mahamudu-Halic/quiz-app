"use client";
import PageWrapper from "@/components/pageWrapper";
import TopicList from "@/components/topicList";

import WelcomeMessageComponent from "@/components/welcome";

interface HomeProps {
  params: {
    slug: string;
  };
}

export default function Home({ params }: HomeProps) {
  return (
    <PageWrapper>
      <WelcomeMessageComponent />
      <TopicList />
    </PageWrapper>
  );
}
