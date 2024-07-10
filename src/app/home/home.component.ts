import { Component } from "@angular/core";
export interface Animal {
  specie: string;
  genre: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  // @ViewChild(BaseChartDirective) chart: BaseChartDirective<"line"> | undefined;

  // public barChartOptions: ChartConfiguration<"line">["options"] = {
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: {
  //     x: {},
  //     y: {
  //       min: 10,
  //     },
  //   },
  //   plugins: {
  //     legend: {
  //       display: true,
  //     },
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end',
  //     },
  //   },
  // };
  // public barChartType = "line" as const;

  // public barChartData: ChartData<"line"> = {
  //   labels: ['Salvador', 'Paulo Afonso', 'Ilhéus', 'Itabuna', 'Jequié', 'Vitória da Conquista'],
  //   datasets: [
  //     { data: [65, 59, 80, 81, 56, 55, 40],
  //       label: 'Dataset 1',
  //       borderColor: 'blue',
  //       backgroundColor: '#4b0082',
  //     },
  //     { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B",  borderColor: '#36A2EB',
  //     backgroundColor: '#9BD0F5', },
  //   ],
  // };

  // // events

  // public chartClicked({
  //   event,
  //   active,
  // }: {
  //   event?: ChartEvent;
  //   active?: object[];
  // }): void {
  //   console.log(event, active);
  // }


  // public chartHovered({
  //   event,
  //   active,
  // }: {
  //   event?: ChartEvent;
  //   active?: object[];
  // }): void {
  //   console.log(event, active);
  // }

  // public randomize(): void {
  //   // Only Change 3 values
  //   this.barChartData.datasets[0].data = [
  //     Math.round(Math.random() * 100),
  //     59,
  //     80,
  //     Math.round(Math.random() * 100),
  //     56,
  //     Math.round(Math.random() * 100),
  //     40,
  //   ];

  //   this.chart?.update();
  // }
}
