import { ErrorText } from "@/app/consts/auth";
import {
  generateResponseBadRequest,
  generateResponseNotFound,
} from "@/app/lib/generateResponse";

export const generateResponseIcorrectCredentials = () => {
  return generateResponseBadRequest(ErrorText.CREDENTIALS);
};

export const generateResponseNotFoundProfile = () => {
  return generateResponseNotFound(ErrorText.NOT_FOUND);
};
