import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    FormControl,
    FormLabel,
    Input,

} from "@chakra-ui/react";
 import { Notify } from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, fetchAllProducts } from "redux/products/products-thunk";
import { getIsOpen } from "redux/modal/modal-select";
import { isOpen } from "redux/modal/modal-slice";

export function ModalWindow({id,values}) {
    const open = useSelector(getIsOpen)
  const dispatch = useDispatch();
  const { title } = values;


  

    const handleSubmit = evt => {
        evt.preventDefault();
         const form = evt.currentTarget
    const title = form.elements.title.value;
   if (!title) {
     Notify.failure('Sorry, but you didn&#180;t enter a value in the field')
     return
      }

  
    dispatch(editProduct({ title:title, id }))
      dispatch(isOpen())
      
    }
  return (
      <Modal isOpen={open} onClose={()=>dispatch(isOpen())}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Please make changes</ModalHeader>
              <ModalBody>
                  <form onSubmit={handleSubmit}>
           <FormControl>
            <FormLabel>Name</FormLabel>
                      <Input
                              placeholder="Title"
                              type="text"
                              name="title"
                              defaultValue={title}
                      />
          </FormControl>
                      <div style={{ display: 'flex', justifyContent: 'end', gap: '10px', margin: '10px' }} >
                          <Button type="submit" colorScheme="blue" >Save</Button>

                      <Button variant="outline" mr={3} onClick={()=>dispatch(isOpen())}>
            Cancel
          </Button></div>

</form>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
