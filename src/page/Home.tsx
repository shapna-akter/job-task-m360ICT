import { Row } from "antd";
import homeBG from "../assets/BG.webp";

export default function Home() {
  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          padding: "20px",
          color: "white",
          backgroundImage: `url(${homeBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh"
        }}
      >
        
      </Row>
    </div>
  );
}
