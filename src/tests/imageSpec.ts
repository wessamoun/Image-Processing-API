import sharp from "sharp";
import path from "path";
const width = 500;
const height = 300;
const filename = "fjord";
const root = path.resolve("");
let image: object;
let imageData: {
  width?: unknown;
  height?: unknown;
};

describe("Test image resizing", () => {
  it("Test image resizing", async () => {
    try {
      image = await sharp(`${root}/assets/full/${filename as string}.jpg`)
        .resize(Number(width) as number, Number(height) as number)
        .toBuffer();
      imageData = await sharp(image).metadata();
    } catch (error) {
      console.log(error);
    }
    expect(imageData.width as number).toEqual(width);
    expect(imageData.height as number).toEqual(height);
  });
});
