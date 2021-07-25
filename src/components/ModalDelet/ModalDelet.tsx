import {
  Modal,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  Box,
} from "@chakra-ui/react";

import { useCards } from "../../provider/card/card";
import Button from "../Button/Button";
import { ChakraProvider } from "@chakra-ui/react";

const ModalDelet = () => {
  const { card, deleteCard } = useCards();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Button redSchema onClick={onOpen}>
        X
      </Button>

      {isOpen && (
        <ChakraProvider>
          <Modal scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bg="#E0DFD5" borderRadius="12">
              <ModalCloseButton />
              <ModalBody align="center" color="#252744">
                {card.map((item, key) => (
                  <Box key={key}>
                    <span>
                      Tem certeza o Cliente <br />
                      <b>
                        {item.typePerson === "PF - Pessoa Física"
                          ? item.username
                          : item.fantasyName}
                      </b>
                      <br />
                      será excluido
                    </span>
                    <br />
                    <Button redSchema onClick={() => deleteCard(item)}>
                      Excluir Cliente
                    </Button>
                  </Box>
                ))}
              </ModalBody>
            </ModalContent>
          </Modal>
        </ChakraProvider>
      )}
    </>
  );
};
export default ModalDelet;
