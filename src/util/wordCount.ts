export default function wordCount(content: string) {
  content = content.replace(/<\S[^><]*>/gi, "");
  return content.match(/\w+/g) ? content.match(/\w+/g)?.length : 0;
}
