import sql from "better-sqlite3";

const db = sql("meals.db");

// 모든 meals 데이터 가져오기
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");

  return db.prepare("SELECT * FROM meals").all();
}

// slug와 동일한 하나의 meal 데이터 가져오기
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
