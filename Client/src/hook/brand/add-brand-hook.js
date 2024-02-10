import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notify from "../../hook/useNotification";
import { createBrand } from "../../Redux/action/brandAction";
import avatar from "../../Assets/avatar.png";

const AddBrandHook = () => {
  const dispatch = useDispatch();
  const [img, setImg] = useState(avatar);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  // to get loading state from redux
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  //   to change name status
  const onChangeName = (event) => {
    event.persist(); // like preventDefault
    setName(event.target.value);
  };
  // when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  const res = useSelector((state) => state.allBrand.brand);

  // save data in DB
  const handleSubmit = async (event) => {
    event.preventDefault();
    // validation
    if (name === "" || selectedFile === null) {
      notify("يجب اضافة البيانات", "warn");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setLoading(true);
    setIsPress(true);
    await dispatch(createBrand(formData));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      setImg(avatar);
      setName("");
      setSelectedFile(null);
      console.log("تم الانتهاء");
      setLoading(true);
      setTimeout(() => setIsPress(false), 1000);

      if (res.status === 201) {
        notify("تمت عملية الاضافة بنجاح", "success");
      } else {
        notify("هناك مشكله فى عملية الاضافة", "error");
      }
    }
  }, [loading]);

  return [
    img,
    name,
    loading,
    isPress,
    handleSubmit,
    onImageChange,
    onChangeName,
  ];
};

export default AddBrandHook;
