import { Schema, model, Document } from "mongoose";

export interface IArticle extends Document {
  title: string;
  subtitle: string;
  image: string;
  publishDate: Date;
  publication: string;
  category: string;
  tag: string;
  url: string;
}

const ArticleSchema = new Schema<IArticle>(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    image: { type: String, required: true, trim: true },
    publishDate: { type: Date, required: true },
    publication: { type: String, required: true, trim: true, index: true },
    category: { type: String, required: true, trim: true, index: true },
    tag: { type: String, required: true, trim: true, index: true },
    url: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

export default model<IArticle>("Article", ArticleSchema);
