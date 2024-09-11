import { Elysia } from "elysia";

const app = new Elysia().get("/", () => {
  let count = 0;

  // Loop 1 juta kali
  for (let i = 0; i < 100000000; i++) {
    count++;
  }
  count = 0
  for (let i = 0; i < 100000000; i++) {
    count++;
    console.log(count)
  }

  // Setelah loop selesai, tampilkan pesan
  return "Hallo Elysia";
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
