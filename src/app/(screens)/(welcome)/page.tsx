import PageWrapper from "@/components/pageWrapper";
import TopicList from "@/components/topicList";

import WelcomeMessageComponent from "@/components/welcome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <WelcomeMessageComponent />
      <TopicList />
    </PageWrapper>
  );
}
