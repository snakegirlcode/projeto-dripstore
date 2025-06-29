import Logo from "./Logo";
import Information from "./Information";

const informations1 = [
  { text: "Sobre Drip Store" },
  { text: "Segurança" },
  { text: "Wishlist" },
  { text: "Blog" },
  { text: "Trabalhe conosco" },
  { text: "Meus pedidos" },
];

const informations2 = [
  { text: "Camisetas" },
  { text: "Calças" },
  { text: "Bonés" },
  { text: "Headphones" },
  { text: "Tênis" },
];

const informations3 = [
  { text: "Av. Santos Dummont, 1510 - 1" },
  { text: "andar - Aldeota, Fortaleza - " },
  { text: "CE, 60150-161" },
  { text: "(85) 3051-3411" },
];

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#1F1F1F", color: "#F5F5F5" }}
      className="p-4 md:p-6"
    >
      <div className="flex flex-column md:flex-row justify-content-between gap-6">
        <div className="flex flex-column gap-3 w-full md:w-3">
          <Logo white />
          <p className="text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            nihil fugiat quibusdam porro amet a quam facere eius cum cumque
            doloribus, asperiores repellat eveniet. Saepe doloremque porro unde
            aliquam suscipit.
          </p>
          <div className="flex gap-3 text-xl">
            <i className="pi pi-instagram cursor-pointer" />
            <i className="pi pi-facebook cursor-pointer" />
            <i className="pi pi-twitter cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-column md:flex-row gap-6 w-full md:w-9 justify-content-between">
          <Information title="Informações" informations={informations1} />
          <Information title="Categorias" informations={informations2} />
          <Information title="Contato" informations={informations3} />
        </div>
      </div>

      <hr style={{ borderColor: "#444", margin: "2rem 0" }} />

      <div className="text-center text-sm">
        © {new Date().getFullYear()} Digital College
      </div>
    </footer>
  );
};

export default Footer;
