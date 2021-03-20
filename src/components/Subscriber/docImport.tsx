import React, { useState, useCallback , useEffect } from "react";
import {
  Button,
  Box,
  Flex,
  useToast,
  Text,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
const {ExcelRenderer } = require("react-excel-renderer");
import { useDropzone } from "react-dropzone";
import { useAddfileMutation } from "../../generated/graphql";
import DetailsDropDown from "./DetailsDropDown";
import { useUploadValuesMutation } from "../../generated/graphql";
import { withApollo } from "../../utils/withApollo";
import { useCreateSubMutation } from "../../generated/graphql";

type Props = {
  click: String;
};

export const DocImport: React.FC<Props> = ({ click }: Props) => {
  const [Addfile] = useAddfileMutation();
  const [FileValues] = useUploadValuesMutation();
  const [File, setFile] = useState([]);
  const [UploadFile, setUploadFile] = useState([]as any);
  const [cols, setcols] = useState([]);
  const [rows, setrows] = useState([]);
  const [rows1, setrows1] = useState([]);
  const [xml, setxml] = useState([]);
  const [xmlfile,setXmlfile] = useState([]as any);
  // const [Loader, setLoader] = useState(false);
  const [filename, setfilename] = useState("");
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const toast = useToast();
  const [createSub] = useCreateSubMutation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const clear = () => {
    setFile([]);
    setxml([]);
    setfilename("");
  };

  const onDrop = useCallback((acceptedFiles) => {
    setrows([]);
    console.log(Firstname , Lastname , Contact , Email)
    setUploadFile(acceptedFiles[0])
    setfilename(acceptedFiles[0].name);

    if (acceptedFiles[0].type === "text/xml") {
      // console.log("file name ", acceptedFiles[0] , ">>>>>>>>>>>" , UploadFile);
       const reader = new FileReader();
      reader.readAsText(acceptedFiles[0]);
      reader.onloadend = (evt) => {
        const readerData: any = evt.target?.result;
        console.log(readerData);
        var convert = require('xml-js');
        var options = {ignoreComment: true,compact: true,ignoreDoctype : true,ignoreCdata:true,ignoreDeclaration:true,ignoreInstruction:true, spaces: 1};
      var result = convert.xml2js(readerData,options);
      console.log(result)
      const data = result.TEST.PERSON.map((item :any)=>Object.keys( item))
      console.log(data[0])
      setXmlfile(result);
      setrows(data[0]);
      setxml([]);
      }
      
    } else {
      ExcelRenderer(acceptedFiles[0], (err: any, resp: any) => {
        if (err) {
          console.log(err);
        } else {
          setFile(acceptedFiles);
          setcols(resp.cols);
          setrows(resp.rows[0]);
          resp.rows.shift();
          setrows1(resp.rows);
          setxml([]);
        }
      });
    }

  }, []);

  const childHandler = (valuesFromChild: any) => {

    let index = valuesFromChild.e.target.value;
    let values = valuesFromChild.name;
    console.log(UploadFile.type);
    console.log(index, values);
    if (UploadFile.type === "text/xml") {
      if (valuesFromChild.name === "Firstname") {
        let arr: any = [];
        const data = xmlfile.TEST.PERSON.map((item : any) => Object.values(item))
        // console.log((data));
       
        const val = data.map((item : any) =>arr.push(item[index]._text))
        setFirstname(arr.toString());
        console.log("firstname",arr.toString());
      }
      if(valuesFromChild.name === "Lastname"){
        let arr: any = [];
        const data = xmlfile.TEST.PERSON.map((item : any) => Object.values(item))
        // console.log((data));
        const val = data.map((item : any) =>arr.push(item[index]._text))
        setLastname(arr.toString());
        console.log("firstname",arr.toString());
      }

      if (valuesFromChild.name === "Email") {
        let arr: any = [];
        const data = xmlfile.TEST.PERSON.map((item : any) => Object.values(item))
        // console.log((data));
        const val = data.map((item : any) =>arr.push(item[index]._text))
        setEmail(arr.toString());
        console.log("firstname",arr.toString());
      }
      if (valuesFromChild.name === "Mobilenumber") {
        let arr: any = [];
        const data = xmlfile.TEST.PERSON.map((item : any) => Object.values(item))
        // console.log((data));
        const val = data.map((item : any) =>arr.push(item[index]._text))
        setContact(arr.toString());
        console.log("firstname",arr.toString());
      }

    //   setFirstname("");
    // setLastname("");
    // setEmail("");
    // setContact("");

    }
    else{
      console.log("going in else condition")
      if (valuesFromChild.name === "Firstname") {
        let arr: any = [];
          rows1.map((item) => arr.push(item[index]));
          console.log("firstname", arr);
          setFirstname(arr.toString());
      }
      if (valuesFromChild.name === "Lastname") {
        let arr: any = [];
        rows1.map((item) => arr.push(item[index]));
        console.log("lastname", arr);
        setLastname(arr.toString());
      }
      if (valuesFromChild.name === "Email") {
        let arr: any = [];
        rows1.map((item) => arr.push(item[index]));
        console.log("email", arr);
        setEmail(arr.toString());
        // console.log("email", typeof Email);
      }
      if (valuesFromChild.name === "Mobilenumber") {
        let arr: any = [];
        rows1.map((item) => arr.push(item[index]));
        console.log("no.", arr);
        setContact(arr.toString());
      }
    // setFirstname("");
    // setLastname("");
    // setEmail("");
    // setContact("");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });



 
 const Value = ()=>{
  FileValues({
    variables: {
      input: {
        FirstName: Firstname,
        LastName: Lastname,
        Email: Email,
        Contact: Contact,
      },
    },
  });
 }
  


  return (
    <>
    <Button onClick={onOpen} ml="3">
      Import File
    </Button>

    <Modal
      size="4xl"
      colorScheme="whiteAlpha"
      isCentered
      blockScrollOnMount={false}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="scale"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Import File</ModalHeader>
        <ModalBody>
        <Flex>
        <Box w="100%" p={4}>
          <div
            {...getRootProps()}
            className="dropBox"
            style={{
              height: "60px",
              borderColor: "lightgrey",
              borderWidth: 1,
              borderRadius: 5,
              padding: 10,
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>

          <Flex p="2">
            <Box p="2">
              <Text>{filename}</Text>
            </Box>
            <Spacer />
            <Box>
              <Button onClick={clear} colorScheme="teal" mr="4">
                Clear
              </Button>
            </Box>
          </Flex>
          <DetailsDropDown
            name="Firstname"
            options={rows}
            action={childHandler}
          />
          <DetailsDropDown
            name="Lastname"
            options={rows}
            action={childHandler}
          />
          <DetailsDropDown name="Email" options={rows} action={childHandler} />
          <DetailsDropDown
            name="Mobilenumber"
            options={rows}
            action={childHandler}
          />
        </Box>
      </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            mr={2}
            type="submit"
            background="blue"
            color="white"
            onClick={()=>Value()}
          >
            Save
          </Button>

          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  );
};



export default withApollo({ ssr: false })(DocImport);
