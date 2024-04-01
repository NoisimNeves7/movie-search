import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    document.title='NEVES7 | About Us'

  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen px-[5%] py-[2%] text-zinc-400">
      <div>
        <i
          onClick={() => navigate(-1)}
          className="ri-arrow-left-line hover:text-[#1770A0] text-2xl"
        ></i>
      </div>
      <div>
        <h1 className=" mt-10 text-8xl mb-5">About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          quis quasi cumque, placeat dignissimos minus assumenda ut reiciendis
          amet adipisci a atque laudantium, nihil accusantium ipsam earum soluta
          praesentium voluptates ratione enim sapiente error? Aspernatur quidem
          temporibus non asperiores voluptatum repellendus deleniti eligendi
          animi quia eos? Nulla, exercitationem quasi impedit sint laborum velit
          nostrum alias ad illo. Natus explicabo sapiente quas placeat nisi rem
          amet aspernatur fugiat omnis repellat exercitationem sint atque sed
          quia dolores, architecto, voluptate doloribus tempora quibusdam
          necessitatibus distinctio illo tempore! Laudantium nulla quod, velit
          numquam nesciunt iusto quam voluptatibus ullam? Ratione harum
          doloremque similique laborum est.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos pariatur
          aliquam doloremque nesciunt in unde! Deleniti placeat tempore et
          minima accusantium nesciunt soluta reiciendis. Impedit, voluptatum
          neque ea aut exercitationem dolor iste obcaecati delectus quae
          molestiae quaerat, provident illum distinctio officiis nam
          perspiciatis dolores amet vero laudantium! Quaerat, tenetur sed!
        </p>
      </div>
    </div>
  );
};

export default About;
