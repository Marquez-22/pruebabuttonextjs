import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FormSearch } from "@/components/FormSearch";
import { Images } from "@/components/Images";
import Head from "next/head";

export default function Home() {
    return (<>
        <Head>
            <title>Search</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <FormSearch

            />
        </Container>

    </>









    )
}
