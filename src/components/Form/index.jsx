import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

export const Form = ({ setNum }) => {
  const schema = yup.object({
    amount: yup
      .number("Deve ser um numero")
      .positive("deve ser positivo")
      .required("é obrigatorio"),
    installments: yup
      .number("Deve ser um numero")
      .positive("deve ser positivo")
      .min(1, "o valor deve ser no minimo 1")
      .max(12, "o valor dever ser no maximo 12")
      .required("é obrigatorio"),
    mdr: yup
      .number("Deve ser um numero")
      .positive("deve ser positivo")
      .required("é obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const resgisterAmount = (data) => {
    api
      .post("", {
        amount: parseFloat((data.amount * 100).toFixed(2)),
        installments: data.installments,
        mdr: data.mdr,
      })
      .then(function (response) {
        setNum(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(resgisterAmount)}>
      <label htmlFor="amount">Informe o valor da venda*</label>
      <input id="amount" type="text" {...register("amount")} />
      <span>{errors.amount?.message}</span>

      <label htmlFor="installments">Em quantas parcelas*</label>
      <input id="installments" type="text" {...register("installments")} />
      <span>{errors.installments?.message}</span>

      <label htmlFor="mdr">Informe o percentual de MDR*</label>
      <input id="mdr" type="text" {...register("mdr")} />
      <span>{errors.mdr?.message}</span>
      <button>Calcular</button>
    </form>
  );
};
