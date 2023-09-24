import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mad Maid&#39;s Assistant</title>
        <meta
          name="description"
          content="Telegram bot application written on Next.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://maid.uz/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Telegram bot is working at&nbsp;
            <code className={styles.code}>@madmaidsbot</code>
          </p>
          <div>
            <a
              href="https://maid.uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <svg
                width={150}
                height={50}
                viewBox="0 0 400 100">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Mad-Maids" transform="translate(3.2266, 1.6875)" fill="currentColor" fillRule="nonzero">
                    <path d="M18.65625,78.609375 L14.71875,22.5 L11.203125,77.953125 C11.140625,78.734375 10.734375,79.140625 9.984375,79.171875 L1.03125,79.5 C0.34375,79.4375 0,79.140625 0,78.609375 L8.0625,7.6875 C8.125,7.3125 8.2265625,7.046875 8.3671875,6.890625 C8.5078125,6.734375 8.8125,6.640625 9.28125,6.609375 L21.09375,6.1875 C21.84375,6.21875 22.25,6.59375 22.3125,7.3125 L26.578125,63.75 L42.84375,7.6875 C43,7 43.4375,6.640625 44.15625,6.609375 L56.484375,6.1875 C57.265625,6.21875 57.65625,6.59375 57.65625,7.3125 L49.6875,78 C49.59375,78.75 49.171875,79.140625 48.421875,79.171875 L38.765625,79.5 C38.109375,79.5 37.78125,79.203125 37.78125,78.609375 L46.921875,21.46875 L30.140625,78.046875 C29.890625,78.765625 29.4375,79.140625 28.78125,79.171875 L19.6875,79.5 C19.0625,79.4375 18.71875,79.140625 18.65625,78.609375 Z" id="Path"></path>
                    <path d="M105.28125,23.859375 L99.1875,77.90625 C99.09375,78.71875 98.6875,79.140625 97.96875,79.171875 L88.5,79.5 C87.84375,79.4375 87.515625,79.140625 87.515625,78.609375 L88.40625,72.234375 C86.96875,74.671875 85.3984375,76.546875 83.6953125,77.859375 C81.9921875,79.171875 80.078125,79.828125 77.953125,79.828125 C75.828125,79.828125 74.015625,79.4609375 72.515625,78.7265625 C71.015625,77.9921875 69.7890625,77.0234375 68.8359375,75.8203125 C67.8828125,74.6171875 67.109375,73.171875 66.515625,71.484375 C65.421875,68.484375 64.875,64.3828125 64.875,59.1796875 C64.875,53.9765625 65.2265625,49.5625 65.9296875,45.9375 C66.6328125,42.3125 67.25,39.5546875 67.78125,37.6640625 C68.3125,35.7734375 69.0234375,33.828125 69.9140625,31.828125 C70.8046875,29.828125 71.8125,28.15625 72.9375,26.8125 C75.5,23.75 78.734375,22.21875 82.640625,22.21875 C85.546875,22.21875 87.765625,22.9140625 89.296875,24.3046875 C90.828125,25.6953125 92.109375,27.75 93.140625,30.46875 L93.703125,24.09375 C93.765625,23.40625 94.15625,23.03125 94.875,22.96875 L104.0625,22.640625 C104.875,22.703125 105.28125,23.109375 105.28125,23.859375 Z M76.6875,57.84375 C76.6875,65.3125 78.6875,69.046875 82.6875,69.046875 C84.4375,69.046875 85.859375,68.2421875 86.953125,66.6328125 C88.046875,65.0234375 88.9921875,61.796875 89.7890625,56.953125 C90.5859375,52.109375 90.984375,48.578125 90.984375,46.359375 C90.984375,44.140625 90.96875,42.734375 90.9375,42.140625 C90.90625,41.546875 90.84375,40.7578125 90.75,39.7734375 C90.65625,38.7890625 90.484375,37.9609375 90.234375,37.2890625 C89.984375,36.6171875 89.65625,35.9375 89.25,35.25 C88.4375,33.90625 87.125,33.234375 85.3125,33.234375 C83.5,33.234375 82.0625,34.0390625 81,35.6484375 C79.9375,37.2578125 79.109375,39.40625 78.515625,42.09375 C77.296875,47.84375 76.6875,53.09375 76.6875,57.84375 Z" id="Shape"></path>
                    <path d="M137.34375,72.9375 C134.5,77.53125 131.0625,79.828125 127.03125,79.828125 C121.625,79.828125 117.921875,77.046875 115.921875,71.484375 C114.828125,68.484375 114.28125,64.3828125 114.28125,59.1796875 C114.28125,53.9765625 114.632812,49.5625 115.335938,45.9375 C116.039062,42.3125 116.65625,39.5546875 117.1875,37.6640625 C117.71875,35.7734375 118.429688,33.828125 119.320312,31.828125 C120.210938,29.828125 121.21875,28.15625 122.34375,26.8125 C124.90625,23.75 128.140625,22.21875 132.046875,22.21875 C134.921875,22.21875 137.125,22.90625 138.65625,24.28125 C140.1875,25.65625 141.484375,27.703125 142.546875,30.421875 L145.21875,1.59375 C145.3125,0.78125 145.734375,0.359375 146.484375,0.328125 L155.671875,0 C156.453125,0.09375 156.84375,0.515625 156.84375,1.265625 L148.171875,77.90625 C148.078125,78.71875 147.671875,79.140625 146.953125,79.171875 L137.53125,79.5 C136.875,79.4375 136.546875,79.140625 136.546875,78.609375 L137.34375,72.9375 Z M126.09375,57.84375 C126.09375,65.3125 128.09375,69.046875 132.09375,69.046875 C133.84375,69.046875 135.265625,68.2421875 136.359375,66.6328125 C137.453125,65.0234375 138.398438,61.796875 139.195312,56.953125 C139.992188,52.109375 140.390625,48.578125 140.390625,46.359375 C140.390625,44.140625 140.375,42.734375 140.34375,42.140625 C140.3125,41.546875 140.25,40.7578125 140.15625,39.7734375 C140.0625,38.7890625 139.890625,37.9609375 139.640625,37.2890625 C139.390625,36.6171875 139.0625,35.9375 138.65625,35.25 C137.84375,33.90625 136.53125,33.234375 134.71875,33.234375 C132.90625,33.234375 131.46875,34.0390625 130.40625,35.6484375 C129.34375,37.2578125 128.515625,39.40625 127.921875,42.09375 C126.703125,47.84375 126.09375,53.09375 126.09375,57.84375 Z" id="Shape"></path>
                    <path d="M200.625,78.609375 L196.6875,22.5 L193.171875,77.953125 C193.109375,78.734375 192.703125,79.140625 191.953125,79.171875 L183,79.5 C182.3125,79.4375 181.96875,79.140625 181.96875,78.609375 L190.03125,7.6875 C190.09375,7.3125 190.195312,7.046875 190.335938,6.890625 C190.476562,6.734375 190.78125,6.640625 191.25,6.609375 L203.0625,6.1875 C203.8125,6.21875 204.21875,6.59375 204.28125,7.3125 L208.546875,63.75 L224.8125,7.6875 C224.96875,7 225.40625,6.640625 226.125,6.609375 L238.453125,6.1875 C239.234375,6.21875 239.625,6.59375 239.625,7.3125 L231.65625,78 C231.5625,78.75 231.140625,79.140625 230.390625,79.171875 L220.734375,79.5 C220.078125,79.5 219.75,79.203125 219.75,78.609375 L228.890625,21.46875 L212.109375,78.046875 C211.859375,78.765625 211.40625,79.140625 210.75,79.171875 L201.65625,79.5 C201.03125,79.4375 200.6875,79.140625 200.625,78.609375 Z" id="Path"></path>
                    <path d="M287.25,23.859375 L281.15625,77.90625 C281.0625,78.71875 280.65625,79.140625 279.9375,79.171875 L270.46875,79.5 C269.8125,79.4375 269.484375,79.140625 269.484375,78.609375 L270.375,72.234375 C268.9375,74.671875 267.367188,76.546875 265.664062,77.859375 C263.960938,79.171875 262.046875,79.828125 259.921875,79.828125 C257.796875,79.828125 255.984375,79.4609375 254.484375,78.7265625 C252.984375,77.9921875 251.757812,77.0234375 250.804688,75.8203125 C249.851562,74.6171875 249.078125,73.171875 248.484375,71.484375 C247.390625,68.484375 246.84375,64.3828125 246.84375,59.1796875 C246.84375,53.9765625 247.195312,49.5625 247.898438,45.9375 C248.601562,42.3125 249.21875,39.5546875 249.75,37.6640625 C250.28125,35.7734375 250.992188,33.828125 251.882812,31.828125 C252.773438,29.828125 253.78125,28.15625 254.90625,26.8125 C257.46875,23.75 260.703125,22.21875 264.609375,22.21875 C267.515625,22.21875 269.734375,22.9140625 271.265625,24.3046875 C272.796875,25.6953125 274.078125,27.75 275.109375,30.46875 L275.671875,24.09375 C275.734375,23.40625 276.125,23.03125 276.84375,22.96875 L286.03125,22.640625 C286.84375,22.703125 287.25,23.109375 287.25,23.859375 Z M258.65625,57.84375 C258.65625,65.3125 260.65625,69.046875 264.65625,69.046875 C266.40625,69.046875 267.828125,68.2421875 268.921875,66.6328125 C270.015625,65.0234375 270.960938,61.796875 271.757812,56.953125 C272.554688,52.109375 272.953125,48.578125 272.953125,46.359375 C272.953125,44.140625 272.9375,42.734375 272.90625,42.140625 C272.875,41.546875 272.8125,40.7578125 272.71875,39.7734375 C272.625,38.7890625 272.453125,37.9609375 272.203125,37.2890625 C271.953125,36.6171875 271.625,35.9375 271.21875,35.25 C270.40625,33.90625 269.09375,33.234375 267.28125,33.234375 C265.46875,33.234375 264.03125,34.0390625 262.96875,35.6484375 C261.90625,37.2578125 261.078125,39.40625 260.484375,42.09375 C259.265625,47.84375 258.65625,53.09375 258.65625,57.84375 Z" id="Shape"></path>
                    <path d="M307.640625,17.53125 C305.703125,17.53125 304.15625,16.921875 303,15.703125 C301.84375,14.484375 301.265625,12.9140625 301.265625,10.9921875 C301.265625,9.0703125 302.039062,7.3515625 303.585938,5.8359375 C305.132812,4.3203125 306.875,3.5625 308.8125,3.5625 C310.75,3.5625 312.320312,4.171875 313.523438,5.390625 C314.726562,6.609375 315.328125,8.1796875 315.328125,10.1015625 C315.328125,12.0234375 314.53125,13.7421875 312.9375,15.2578125 C311.34375,16.7734375 309.578125,17.53125 307.640625,17.53125 Z M312.84375,23.859375 L306.75,77.90625 C306.6875,78.34375 306.578125,78.65625 306.421875,78.84375 C306.265625,79.03125 305.96875,79.140625 305.53125,79.171875 L296.109375,79.5 C295.421875,79.4375 295.078125,79.140625 295.078125,78.609375 L301.265625,24.09375 C301.390625,23.40625 301.78125,23.03125 302.4375,22.96875 L311.578125,22.640625 C312.421875,22.703125 312.84375,23.109375 312.84375,23.859375 Z" id="Shape"></path>
                    <path d="M344.90625,72.9375 C342.0625,77.53125 338.625,79.828125 334.59375,79.828125 C329.1875,79.828125 325.484375,77.046875 323.484375,71.484375 C322.390625,68.484375 321.84375,64.3828125 321.84375,59.1796875 C321.84375,53.9765625 322.195312,49.5625 322.898438,45.9375 C323.601562,42.3125 324.21875,39.5546875 324.75,37.6640625 C325.28125,35.7734375 325.992188,33.828125 326.882812,31.828125 C327.773438,29.828125 328.78125,28.15625 329.90625,26.8125 C332.46875,23.75 335.703125,22.21875 339.609375,22.21875 C342.484375,22.21875 344.6875,22.90625 346.21875,24.28125 C347.75,25.65625 349.046875,27.703125 350.109375,30.421875 L352.78125,1.59375 C352.875,0.78125 353.296875,0.359375 354.046875,0.328125 L363.234375,0 C364.015625,0.09375 364.40625,0.515625 364.40625,1.265625 L355.734375,77.90625 C355.640625,78.71875 355.234375,79.140625 354.515625,79.171875 L345.09375,79.5 C344.4375,79.4375 344.109375,79.140625 344.109375,78.609375 L344.90625,72.9375 Z M333.65625,57.84375 C333.65625,65.3125 335.65625,69.046875 339.65625,69.046875 C341.40625,69.046875 342.828125,68.2421875 343.921875,66.6328125 C345.015625,65.0234375 345.960938,61.796875 346.757812,56.953125 C347.554688,52.109375 347.953125,48.578125 347.953125,46.359375 C347.953125,44.140625 347.9375,42.734375 347.90625,42.140625 C347.875,41.546875 347.8125,40.7578125 347.71875,39.7734375 C347.625,38.7890625 347.453125,37.9609375 347.203125,37.2890625 C346.953125,36.6171875 346.625,35.9375 346.21875,35.25 C345.40625,33.90625 344.09375,33.234375 342.28125,33.234375 C340.46875,33.234375 339.03125,34.0390625 337.96875,35.6484375 C336.90625,37.2578125 336.078125,39.40625 335.484375,42.09375 C334.265625,47.84375 333.65625,53.09375 333.65625,57.84375 Z" id="Shape"></path>
                    <path d="M395.296875,33.5625 L390,33.328125 C388.5,33.328125 387.320312,33.671875 386.460938,34.359375 C385.601562,35.046875 385.171875,36.0390625 385.171875,37.3359375 C385.171875,38.6328125 385.40625,40.0625 385.875,41.625 C386.5,43.71875 387.585938,46.15625 389.132812,48.9375 C390.679688,51.71875 391.75,53.6875 392.34375,54.84375 C394.15625,58.4375 395.0625,61.859375 395.0625,65.109375 C395.0625,69.828125 393.679688,73.4609375 390.914062,76.0078125 C388.148438,78.5546875 383.953125,79.828125 378.328125,79.828125 C375.546875,79.828125 373.328125,79.6796875 371.671875,79.3828125 C370.015625,79.0859375 369.101562,78.8515625 368.929688,78.6796875 C368.757812,78.5078125 368.671875,78.234375 368.671875,77.859375 L369.890625,69.1875 C369.953125,68.40625 370.226562,68.015625 370.710938,68.015625 C371.195312,68.015625 372.125,68.1875 373.5,68.53125 C374.875,68.875 376.078125,69.046875 377.109375,69.046875 C380.921875,69.046875 382.828125,67.53125 382.828125,64.5 C382.828125,62.34375 382.367188,60.328125 381.445312,58.453125 C380.523438,56.578125 379.523438,54.640625 378.445312,52.640625 C377.367188,50.640625 376.53125,49.0390625 375.9375,47.8359375 C375.34375,46.6328125 374.726562,44.96875 374.085938,42.84375 C373.445312,40.71875 373.125,38.71875 373.125,36.84375 C373.125,32.46875 374.429688,28.9375 377.039062,26.25 C379.648438,23.5625 383.453125,22.21875 388.453125,22.21875 C391.671875,22.21875 394.1875,22.375 396,22.6875 C396.78125,22.8125 397.171875,23.21875 397.171875,23.90625 L396.140625,32.25 C396.140625,33.125 395.859375,33.5625 395.296875,33.5625 Z" id="Path"></path>
                  </g>
                </g>
              </svg>
              <Image
                src="/maid-text.svg"
                alt="Mad Maids"
                className={styles.sakhibLogo}
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.thirteen}>
            <Image
              src="https://www.maid.uz/assets/misc/hero%20-%20blog.png"
              alt="Mad Maids"
              width={100}
              height={100}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/mad-maids/telegram"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Repository <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Open the repository.</p>
          </a>

          <a
            href="https://t.me/madmaidsbot"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Telegram <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Chat with the bot!</p>
          </a>

          <a
            href="https://github.com/mad-maids"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              GitHub <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Visit Mad Maid&#39;s GitHub page.
            </p>
          </a>

          <a
            href="https://t.me/madmaids"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Community <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Visit Mad Maid&#39;s channel on Telegram.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
