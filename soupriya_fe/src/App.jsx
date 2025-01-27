import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav className="topnav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
          <label className="switch">
            <input id="toggle-switch" type="checkbox" />
            <span className="slider round">
              <i>
                <svg
                  className="color-theme-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 122.88 122.88"
                >
                  <path
                    className="cls-1"
                    d="M30,13.21A3.93,3.93,0,1,1,36.8,9.27L41.86,18A3.94,3.94,0,1,1,35.05,22L30,13.21Zm31.45,13A35.23,35.23,0,1,1,36.52,36.52,35.13,35.13,0,0,1,61.44,26.2ZM58.31,4A3.95,3.95,0,1,1,66.2,4V14.06a3.95,3.95,0,1,1-7.89,0V4ZM87.49,10.1A3.93,3.93,0,1,1,94.3,14l-5.06,8.76a3.93,3.93,0,1,1-6.81-3.92l5.06-8.75ZM109.67,30a3.93,3.93,0,1,1,3.94,6.81l-8.75,5.06a3.94,3.94,0,1,1-4-6.81L109.67,30Zm9.26,28.32a3.95,3.95,0,1,1,0,7.89H108.82a3.95,3.95,0,1,1,0-7.89Zm-6.15,29.18a3.93,3.93,0,1,1-3.91,6.81l-8.76-5.06A3.93,3.93,0,1,1,104,82.43l8.75,5.06ZM92.89,109.67a3.93,3.93,0,1,1-6.81,3.94L81,104.86a3.94,3.94,0,0,1,6.81-4l5.06,8.76Zm-28.32,9.26a3.95,3.95,0,1,1-7.89,0V108.82a3.95,3.95,0,1,1,7.89,0v10.11Zm-29.18-6.15a3.93,3.93,0,0,1-6.81-3.91l5.06-8.76A3.93,3.93,0,1,1,40.45,104l-5.06,8.75ZM13.21,92.89a3.93,3.93,0,1,1-3.94-6.81L18,81A3.94,3.94,0,1,1,22,87.83l-8.76,5.06ZM4,64.57a3.95,3.95,0,1,1,0-7.89H14.06a3.95,3.95,0,1,1,0,7.89ZM10.1,35.39A3.93,3.93,0,1,1,14,28.58l8.76,5.06a3.93,3.93,0,1,1-3.92,6.81L10.1,35.39Z"
                  />
                </svg>
              </i>
              <i>
                <svg
                  className="color-theme-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.9001 2.30719C19.7392 1.8976 19.1616 1.8976 19.0007 2.30719L18.5703 3.40247C18.5212 3.52752 18.4226 3.62651 18.298 3.67583L17.2067 4.1078C16.7986 4.26934 16.7986 4.849 17.2067 5.01054L18.298 5.44252C18.4226 5.49184 18.5212 5.59082 18.5703 5.71587L19.0007 6.81115C19.1616 7.22074 19.7392 7.22074 19.9001 6.81116L20.3305 5.71587C20.3796 5.59082 20.4782 5.49184 20.6028 5.44252L21.6941 5.01054C22.1022 4.849 22.1022 4.26934 21.6941 4.1078L20.6028 3.67583C20.4782 3.62651 20.3796 3.52752 20.3305 3.40247L19.9001 2.30719Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M16.0328 8.12967C15.8718 7.72009 15.2943 7.72009 15.1333 8.12967L14.9764 8.52902C14.9273 8.65407 14.8287 8.75305 14.7041 8.80237L14.3062 8.95987C13.8981 9.12141 13.8981 9.70107 14.3062 9.86261L14.7041 10.0201C14.8287 10.0694 14.9273 10.1684 14.9764 10.2935L15.1333 10.6928C15.2943 11.1024 15.8718 11.1024 16.0328 10.6928L16.1897 10.2935C16.2388 10.1684 16.3374 10.0694 16.462 10.0201L16.8599 9.86261C17.268 9.70107 17.268 9.12141 16.8599 8.95987L16.462 8.80237C16.3374 8.75305 16.2388 8.65407 16.1897 8.52902L16.0328 8.12967Z"
                    fill="#1C274C"
                  />
                  <path
                    opacity="0.5"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="#1C274C"
                  />
                </svg>
              </i>

              <span className="z-index-10"></span>
            </span>
          </label>
        </nav>
      </header>
      <main className="margin-x-5">
        <section className="d-flex-center">
          <h1>SouPriya</h1>
        </section>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            tincidunt accumsan ex id ullamcorper. Duis sit amet ultrices arcu,
            quis fringilla lacus. Cras non ante congue, vulputate neque vitae,
            accumsan neque. Nulla sed lorem nisi. Integer nisi tortor, congue
            vel turpis in, porta convallis nisl. Donec aliquam justo non magna
            pellentesque, faucibus ornare sapien finibus. Pellentesque eget
            libero mi. Suspendisse consectetur lectus at nisl maximus, at
            hendrerit nulla volutpat. Fusce fringilla tellus eu euismod
            vestibulum. Suspendisse fringilla in tortor nec dapibus. Nunc eu
            purus libero. Donec iaculis elit quam, vitae feugiat est rutrum et.
            Ut sit amet molestie lectus, et sollicitudin sem. Nam vel lectus
            dolor. Sed molestie, massa nec rhoncus ultricies, ex augue laoreet
            dolor, sit amet posuere sem massa sed massa. Donec rutrum ornare
            laoreet. Vivamus congue molestie ultricies. Aliquam vel tortor nisl.
            Morbi convallis lacus quis ex consectetur, nec aliquam lacus
            lobortis. Proin consequat tortor dui, eget ultricies turpis porta
            sed. Quisque efficitur, arcu sit amet fringilla fringilla, velit
            turpis cursus nunc, a scelerisque nunc tellus ut nisl. Vestibulum
            semper dictum velit, et dignissim justo congue non. Suspendisse
            consectetur ipsum a consequat vestibulum. Donec nec dui vel urna
            luctus consequat ac tristique velit. Nulla vulputate neque turpis,
            sit amet elementum lectus faucibus in. Fusce dignissim justo eget
            blandit volutpat. Mauris eu volutpat lacus. Nunc sed nunc augue.
            Mauris sagittis magna enim, eu vehicula tortor dapibus at. Duis id
            massa sed eros egestas suscipit. Nulla nibh purus, congue eget
            convallis in, volutpat eu metus. Vestibulum non nisl sed leo
            facilisis blandit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ut sapien metus, tempor a mauris vitae, interdum
            suscipit turpis. Duis cursus augue a lacus vulputate, at scelerisque
            enim vulputate. Proin id aliquam dui. Nunc lacinia ut tellus quis
            ullamcorper. Nam ultricies euismod dui a accumsan. Proin molestie
            diam nunc, nec luctus libero maximus in. Donec nec leo posuere augue
            scelerisque efficitur. Aenean sollicitudin nulla sodales, luctus
            elit et, elementum augue. Maecenas mi quam, porta vel aliquet at,
            tempor at sapien. Proin lobortis dui justo. Mauris iaculis urna eget
            mollis dictum. Donec in dui placerat, venenatis urna id, facilisis
            neque. Nunc felis odio, viverra eget tempor ut, feugiat in diam.
            Donec eu euismod nunc, nec tincidunt libero. Fusce augue erat,
            egestas ullamcorper risus feugiat, viverra bibendum magna. Maecenas
            blandit aliquet rutrum. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia curae; Praesent condimentum
            tortor tellus, sit amet ultrices ex tincidunt at. Integer eu tellus
            ac leo cursus gravida. Sed in tincidunt justo, et fermentum erat.
            Vestibulum interdum nisi ac mi venenatis interdum. Cras eu magna non
            lectus fermentum efficitur. Sed sagittis vitae ipsum quis porttitor.
            Etiam a nisi fermentum, aliquet sem eu, laoreet magna. Morbi
            interdum mollis libero vel placerat. Curabitur quis lacus vel mi
            rutrum sollicitudin.
          </p>
        </section>
      </main>
      <footer className="shape-divider">
        <svg
          id="visual"
          viewBox="0 400 900 200"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <path
            d="M0 491L13.7 487.7C27.3 484.3 54.7 477.7 82 467C109.3 456.3 136.7 441.7 163.8 442.8C191 444 218 461 245.2 462.5C272.3 464 299.7 450 327 445.3C354.3 440.7 381.7 445.3 409 451C436.3 456.7 463.7 463.3 491 465.5C518.3 467.7 545.7 465.3 573 455.7C600.3 446 627.7 429 654.8 418C682 407 709 402 736.2 403.3C763.3 404.7 790.7 412.3 818 413.3C845.3 414.3 872.7 408.7 886.3 405.8L900 403L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
            fill="#fa7268"
          ></path>
          <path
            d="M0 451L13.7 455.3C27.3 459.7 54.7 468.3 82 471.5C109.3 474.7 136.7 472.3 163.8 470.5C191 468.7 218 467.3 245.2 465.3C272.3 463.3 299.7 460.7 327 465.3C354.3 470 381.7 482 409 483C436.3 484 463.7 474 491 471.7C518.3 469.3 545.7 474.7 573 470.5C600.3 466.3 627.7 452.7 654.8 456.7C682 460.7 709 482.3 736.2 489.8C763.3 497.3 790.7 490.7 818 489.7C845.3 488.7 872.7 493.3 886.3 495.7L900 498L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
            fill="#eb5967"
          ></path>
          <path
            d="M0 481L13.7 488.5C27.3 496 54.7 511 82 511.8C109.3 512.7 136.7 499.3 163.8 501.5C191 503.7 218 521.3 245.2 530.5C272.3 539.7 299.7 540.3 327 540.5C354.3 540.7 381.7 540.3 409 535.3C436.3 530.3 463.7 520.7 491 517.7C518.3 514.7 545.7 518.3 573 523.2C600.3 528 627.7 534 654.8 531.8C682 529.7 709 519.3 736.2 518.3C763.3 517.3 790.7 525.7 818 528.7C845.3 531.7 872.7 529.3 886.3 528.2L900 527L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
            fill="#da3f67"
          ></path>
          <path
            d="M0 524L13.7 530.8C27.3 537.7 54.7 551.3 82 560.5C109.3 569.7 136.7 574.3 163.8 568.8C191 563.3 218 547.7 245.2 545.8C272.3 544 299.7 556 327 555C354.3 554 381.7 540 409 535.2C436.3 530.3 463.7 534.7 491 538.5C518.3 542.3 545.7 545.7 573 544.5C600.3 543.3 627.7 537.7 654.8 540.7C682 543.7 709 555.3 736.2 561.2C763.3 567 790.7 567 818 568C845.3 569 872.7 571 886.3 572L900 573L900 601L886.3 601C872.7 601 845.3 601 818 601C790.7 601 763.3 601 736.2 601C709 601 682 601 654.8 601C627.7 601 600.3 601 573 601C545.7 601 518.3 601 491 601C463.7 601 436.3 601 409 601C381.7 601 354.3 601 327 601C299.7 601 272.3 601 245.2 601C218 601 191 601 163.8 601C136.7 601 109.3 601 82 601C54.7 601 27.3 601 13.7 601L0 601Z"
            fill="#c62368"
          ></path>
        </svg>
      </footer>
    </>
  );
}

export default App;
