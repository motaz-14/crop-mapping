import { Line } from "react-chartjs-2";
import { useLanguage } from "../../LanguageContext"; 

function MyChart() {
  // eslint-disable-next-line
  const { getText } = useLanguage(); 

  const trueLabel = getText("True", "صح");
  const falseLabel = getText("False", "غلط");

  const labels = [
    getText("Jan", "يناير"),
  getText("Feb", "فبراير"),
  getText("Mar", "مارس"),
  getText("Apr", "أبريل"),
  getText("May", "مايو"),
  getText("Jun", "يونيو"),
  getText("Jul", "يوليو"),
  getText("Aug", "أغسطس"),
  getText("Sep", "سبتمبر"),
  getText("Oct", "أكتوبر"),
  getText("Nov", "نوفمبر"),
  getText("Dec", "ديسمبر"),
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: getText("Seeds Check Overview", "نظرة عامة على فحص البذور"),
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: trueLabel, // Use translated "True" label
        data: labels.map(() => Math.random() * 1000),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        cubicInterpolationMode: "monotone",
        fill: true,
      },
      {
        label: falseLabel, // Use translated "False" label
        data: labels.map(() => Math.random() * 1000),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        cubicInterpolationMode: "monotone",
        fill: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
}

export default MyChart;
