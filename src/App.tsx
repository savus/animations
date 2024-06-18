import "../src/css/main.css";
import "../src/css/curves-section.css";
import "../src/css/animating-gradients.css";

function App() {
  return (
    <>
      <div className="typewriter-container">
        <div className="typewriter-text">
          I love to <span className="typing-slot">Example</span>
        </div>
      </div>
      <section className="curves-section">
        <section className="blue">
          <h1>Nice Curves</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            dolore minima corporis doloremque necessitatibus laboriosam itaque
            aut obcaecati minus sequi, quos suscipit corrupti rerum, recusandae
            nostrum neque similique tempora. Cupiditate.
          </p>
          <div className="curve"></div>
        </section>
        <section className="bubble">
          <h1>Nice Curves</h1>
          <p>
            Iure earum mollitia quaerat alias, nobis laboriosam quisquam
            voluptatum iusto eveniet, tempore aliquid esse unde. Deleniti quod
            nobis numquam fuga, ut tempora, nihil rem unde adipisci, vel quam
            reiciendis sapiente!
          </p>
        </section>
        <section className="dark">
          <h1>Nice Curves</h1>
          <p>
            Ducimus dignissimos et alias amet odio ipsa aspernatur impedit
            sapiente neque eos. Vel, quidem. Optio tenetur atque voluptate,
            ipsum vel nostrum molestias, blanditiis inventore facilis voluptatum
            sint consequatur soluta necessitatibus.
          </p>
        </section>
        <section className="red">
          <h1>Nice Curves</h1>
          <p>
            Cupiditate consequatur, sit explicabo autem dolor vel corrupti
            tempore. Aliquid, nisi animi aut expedita cumque nostrum maxime
            perferendis magni sunt dignissimos repellendus explicabo voluptas
            quod ullam distinctio. Optio, tenetur? Ipsam!
          </p>
          <div className="waves">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
        <div className="spacer layer-1"></div>
        <section>
          <h1>Nice Curves</h1>
          <p>
            Cupiditate explicabo laboriosam veniam similique neque natus alias
            labore assumenda excepturi tenetur. Accusamus obcaecati natus quidem
            ea inventore veritatis enim itaque placeat velit magnam voluptatibus
            dolorum facilis, qui voluptates commodi.
          </p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>
            Corrupti consequuntur amet placeat ratione aliquid. Aliquid
            deleniti, sunt necessitatibus labore quisquam doloribus incidunt
            dolores voluptate quo unde laudantium consectetur enim doloremque
            nesciunt veritatis fuga? Tempora magni officiis temporibus eos?
          </p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>
            Quaerat quae obcaecati excepturi ea provident exercitationem
            suscipit omnis officiis, modi tempora, vitae totam at deserunt quam
            ratione aspernatur odit saepe earum magni harum. Libero nemo minima
            modi obcaecati recusandae.
          </p>
        </section>
        <section>
          <h1>Nice Curves</h1>
          <p>
            Vel odit a nobis error modi corrupti cum eaque itaque, veniam quas
            laudantium exercitationem cumque at dicta laboriosam odio beatae
            quaerat recusandae, nemo repellat nam necessitatibus consectetur
            quasi? Illo, aliquid!
          </p>
        </section>
      </section>
      <section className="animating-gradient-section">
        <button className="fun">Hover Me</button>
      </section>
    </>
  );
}

export default App;
