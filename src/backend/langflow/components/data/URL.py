from typing import Any, Dict

from langchain_community.document_loaders.web_base import WebBaseLoader

from langflow import CustomComponent
from langflow.schema import Record


class URLComponent(CustomComponent):
    display_name = "URL"
    description = "Load URLs and convert them to records."

    def build_config(self) -> Dict[str, Any]:
        return {
            "urls": {"display_name": "URL"},
        }

    async def build(
        self,
        urls: list[str],
    ) -> Record:

        loader = WebBaseLoader(web_paths=urls)
        docs = loader.load()
        records = self.to_records(docs)
        return records