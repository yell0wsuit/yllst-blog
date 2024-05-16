import React from "react";
import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";

export default function GiscusComponent() {
    const { colorMode } = useColorMode();

    return (
        <Giscus
            repo="yell0wsuit/yllst-blog"
            repoId="R_kgDOL8Q9JQ"
            category="General"
            categoryId="DIC_kwDOL8Q9Jc4CfaHn" // E.g. id of "General"
            mapping="url" // Important! To map comments to URL
            term="Welcome to @giscus/react component!"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="1"
            inputPosition="top"
            theme={colorMode}
            lang="en"
            loading="lazy"
            crossorigin="anonymous"
            async
        />
    );
}
