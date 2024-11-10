import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { DataAPIClient } from "@datastax/astra-db-ts";

const { 
  ASTRA_DB_NAMESPACE, 
  ASTRA_DB_COLLECTION, 
  ASTRA_DB_API_ENDPOINT, 
  ASTRA_DB_APPLICATION_TOKEN, 
  OPENAI_API_KEY 
} = process.env

const openai = new OpenAI({ 
  apiKey: OPENAI_API_KEY 
})
