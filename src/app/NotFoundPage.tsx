import Layout from "@/components/Layout/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <main className="route-message">
        <h1>Page not found</h1>
        <p>The requested page does not exist.</p>
      </main>
    </Layout>
  );
}
