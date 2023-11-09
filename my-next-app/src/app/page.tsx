import CandlestickChart from "@/components/chart";
import styles from "./page.module.css";
import { ChakraProvider, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <Text>U WOT M8</Text>
        <CandlestickChart data={undefined} />
      </main>
    </ChakraProvider>
  );
}
