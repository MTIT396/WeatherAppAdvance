export function shuffleArray<T>(array: T[]): T[] {
  const result = array.slice(); // tạo bản sao, không làm thay đổi mảng gốc
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random từ 0 đến i
    [result[i], result[j]] = [result[j], result[i]]; // hoán đổi
  }
  return result;
}
