import { Reveal } from "@/components/shared/reveal";

const tiles = [
  {
    span: "md:col-span-2",
    tag: "CLINICS",
    title: "Clinics & Practices",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJQeWDvwlLUqdimBKEdLVmGwaUjFgNaoAmbumCrwjU1htrQw5B4DbMzjIlwKuwxwqSfCoTsDTtEHBOIJg8n4_cp1YEXrTT1wUcLOS8y7LVaHUywy1KqKKzZVbMbOF-3Wf0AU09iiTT94x7XqMK7S52lli_FFzZ7HPPRZGlWXclj5HBmD3c48D41zosqlfrctayuGxbRmPUwR7LHgPudZuHo71mWei19slboXaxpjDh3bnT5lVwhgvqtoY_bzkgrVok4TjbnJqMfkY",
  },
  {
    span: "",
    tag: "DIAGNOSTICS",
    title: "Diagnostic Centers & Labs",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLak-gG2TDXNTiTxcwMSI_XDpi6KQrk9Q05HXziwyoqFywf--rxi8sbSiFyj7mGjyrdIzVIzXpkzwoiOYN01wtIto5zyhv-qltNZOOE12I0LvaqDyY5_7feX8tleO_ipuPZDqpTrGjqTcqDnT2fG4-SN9fNEBe7IHELHEvnOhZd3uTKgSe4ppCE4pE3HcizA5HU7vuSK43nsaZuGNNZ9sHryp2NyY88jDU-pWxVTyGHmdBpIVsDvsmqxGMl5_DLLocv6seWrIEPzA",
  },
  {
    span: "",
    tag: "PHARMACY",
    title: "Pharmacies",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnKm9ikk4KeBk8gv15jFO2FLLa9SQilKfgL3oOm8IYEr2nzqsH-yx0Edlo3pR0Zd7HsR3bgba8hj85awZbEBiTC2xsI3Mrzub03AULJn8BFVeWFV0t0pfJqZpqLPzy9L3LP5u2bD6ZwlYf9j2COz5vHnEw5ov49P2Pur_FU2PIE1eChYasAQyUCDpqLkAoVUShBScmSL226ljlbf3uv_4XIYBAyePCa_Jm--mtUnPiJKcZsFtkwkBZxrmbNp6-GzP_uaiqjZ14PEQ",
  },
  {
    span: "md:col-span-2",
    tag: "STARTUPS",
    title: "Healthcare Startups",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuANbgdD_xZTpcXdyQifEW2I4QY_qblrwfB9h1jZS9VvS4L7vH9ox3hrX5a5q_lESwpwwdtKEdKXgfPsLnmrjYsTKpykR4ohrcIQLhq9ZOPD51AwG8G3kHY1p9LO7nX2uxoqD-HwRoJy17q7pBRmveER3FvVNiD81tiWww8mJz67Q73mSs7RZ1kzw2X3SfdJ1_VE_ZS7dJPTeol0VxxICGEKSUWaV8t3mKhNEX-XMjo5_7KLOAFCMzffqBMwndPea6CWZ5VcM9gRWMg",
  },
];

export function Audiences() {
  return (
    <section className="py-unit-2xl md:py-unit-4xl bg-surface-bright">
      <div className="max-w-container-max mx-auto px-gutter">
        <Reveal className="mb-unit-2xl">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Who We Build For
          </h2>
          <p className="font-body-lg text-on-surface-variant mt-4">
            Software and automation for the organizations that keep healthcare
            running.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiles.map((tile) => (
            <div
              key={tile.title}
              className={`${tile.span} h-[400px] rounded-eight overflow-hidden relative group`}
            >
              <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-all z-10" />
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${tile.img}')` }}
              />
              <div className="absolute bottom-0 left-0 p-unit-lg z-20 text-white">
                <span className="font-label-caps text-label-caps border border-white/30 px-3 py-1 rounded-full mb-4 inline-block">
                  {tile.tag}
                </span>
                <h3 className="font-headline-md text-headline-md">{tile.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
