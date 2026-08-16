import { Router, Request, Response } from "express";
import Article from "../models/Article";

const router = Router();

// GET /api/articles?category=..&tag=..&publication=..
router.get("/", async (req: Request, res: Response) => {
  try {
    const { category, tag, publication } = req.query;
    const filter: Record<string, unknown> = {};

    if (category && category !== "All") filter.category = category;
    if (tag && tag !== "All") filter.tag = tag;
    if (publication && publication !== "All") filter.publication = publication;

    const articles = await Article.find(filter).sort({ publishDate: -1 });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch articles", error: (err as Error).message });
  }
});

// GET /api/articles/filters -> distinct values for dropdowns
router.get("/filters", async (_req: Request, res: Response) => {
  try {
    const [categories, tags, publications] = await Promise.all([
      Article.distinct("category"),
      Article.distinct("tag"),
      Article.distinct("publication"),
    ]);
    res.json({
      categories: categories.sort(),
      tags: tags.sort(),
      publications: publications.sort(),
    });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch filters", error: (err as Error).message });
  }
});

export default router;
