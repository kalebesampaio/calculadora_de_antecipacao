import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { StyledTitle } from "../../styles/typography";
import { StyledForm } from "./styles";

export const Form = ({ setNum, setLoading, setApiError }) => {
  const schema = yup.object({
    amount: yup.string("Deve ser um número").required("É obrigatorio"),
    installments: yup
      .number()
      .typeError("Deve ser um número")
      .positive("Deve ser positivo")
      .min(1, "Mínimo de 1 parcela")
      .max(12, "Máximo de 12 parcelas")
      .required("É obrigatorio"),
    mdr: yup
      .number()
      .typeError("Deve ser um número")
      .positive("deve ser positivo")
      .required("É obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const resgisterAmount = (data) => {
    setLoading(true);
    setApiError(false);
    api
      .post("", {
        amount: parseFloat(
          (
            parseFloat(
              data.amount
                .replace("R", "")
                .replace("$", "")
                .replace(".", "")
                .replace(",", ".")
            ) * 100
          ).toFixed(2)
        ),
        installments: data.installments,
        mdr: data.mdr,
      })
      .then(function (response) {
        setNum(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        setApiError(true);
        console.error(error);
      });
  };

  const currency = (e) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.currentTarget.value = "R$ " + value;
    console.log(value);
    return e;
  };

  return (
    <StyledForm onSubmit={handleSubmit(resgisterAmount)}>
      <StyledTitle>Simule sua Antecipação</StyledTitle>
      <label htmlFor="amount">Informe o valor da venda</label>
      <input
        id="amount"
        type="text"
        onKeyUp={currency}
        placeholder="R$ 0,01"
        {...register("amount")}
      />
      <span>{errors.amount?.message}</span>

      <label htmlFor="installments">Em quantas parcelas</label>
      <input id="installments" type="text" {...register("installments")} />
      <span>{errors.installments?.message}</span>

      <label htmlFor="mdr">Informe o percentual de MDR</label>
      <input id="mdr" type="text" {...register("mdr")} />
      <span>{errors.mdr?.message}</span>
      <button>Calcular</button>
    </StyledForm>
  );
};
