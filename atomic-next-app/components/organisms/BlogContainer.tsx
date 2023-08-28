import Title from "../atoms/Title";
import AuthorDetail from "../molecule/AuthorDetail";
import BlogContent from "../molecule/BlogContent";

export default function BlogContainer() {
  return (
    <div className="blog-container">
      <Title />
      <AuthorDetail />
      <BlogContent />
    </div>
  );
}