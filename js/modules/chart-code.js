$(document).ready(function() {
  if ($("#InspectionTypesChart").length > 0) {
    initInspectionTypesChart();
    initGaugeChart();
    InitStackedStripChart();
    deathCasesChart();
    violationChart();
  }

  casesStatusChart();
  riskTypesChart();
  genderRatioChart();
  nationalitiesChart();

  function initInspectionTypesChart() {
    // Start Par Chart

    var InspectionTypesChart = echarts.init(
      document.getElementById("InspectionTypesChart")
    );

    var dataAxis = [
      "Health & Safety inspections",
      "Late wages inspections",
      "Normal (periodic)",
      "Work Injuries (reported)"
    ];
    var data = [220, 182, 191, 290];
    var yMax = 500;
    var dataShadow = [];

    for (var i = 0; i < data.length; i++) {
      dataShadow.push(yMax);
    }

    InspectionTypesChartoption = {
      tooltip: {},
      legend: {
        data: []
      },
      title: {
        text: "inspection Types"
        // subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
      },
      xAxis: {
        data: dataAxis,
        axisLabel: {
          // inside: true,
          textStyle: {
            color: "#000"
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        z: 10
      },
      yAxis: {
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          textStyle: {
            color: "#999"
          }
        }
      },
      dataZoom: [
        {
          type: "inside"
        }
      ],
      series: [
        {
          // For shadow
          type: "bar",
          itemStyle: {
            normal: { color: "rgba(0,0,0,0.05)" }
          },
          barGap: "-100%",
          barCategoryGap: "40%",
          data: dataShadow,
          animation: false
        },
        {
          type: "bar",
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" }
              ])
            },
            emphasis: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#2378f7" },
                { offset: 0.7, color: "#2378f7" },
                { offset: 1, color: "#83bff6" }
              ])
            }
          },
          data: data
        }
      ]
    };

    // // Enable data zoom when user click bar.
    // var zoomSize = 6;
    // InspectionTypesChart.on('click', function (params) {
    //     console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
    //     myChart.dispatchAction({
    //         type: 'dataZoom',
    //         startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
    //         endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
    //     });
    // });

    InspectionTypesChart.setOption(InspectionTypesChartoption);
    // End Par Chart
  }

  function initGaugeChart() {
    // start Gauge Chart
    var GaugeChart = echarts.init(document.getElementById("GaugeChart"));
    GaugeChartoption = {
      tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {
          // restore: {},
          // saveAsImage: {}
        }
      },
      series: [
        {
          name: "Inspectors Achieve Target",
          type: "gauge",
          detail: { formatter: "{value}%" },
          data: [{ value: 50, name: "Achieved" }],
          axisLine: {
            lineStyle: {
              color: [
                [0.25, "red"],
                [0.5, "orange"],
                [0.75, "#fcd12a"],
                [1, "green"]
              ]
            }
          }
        }
      ]
    };

    setInterval(function() {
      GaugeChartoption.series[0].data[0].value =
        (Math.random() * 100).toFixed(2) - 0;
      GaugeChart.setOption(GaugeChartoption, true);
    }, 2000);
    GaugeChart.setOption(GaugeChartoption);
    // End Gauge Chart
  }

  function InitStackedStripChart() {
    // start Stacked Strip Chart
    var StackedStripChart = echarts.init(
      document.getElementById("StackedStripChart")
    );

    var areaStyle = {
      silent: false,
      itemStyle: {
        normal: {
          color: "rgba(241, 28, 93, 0.05)"
        }
      },
      data: [
        [
          {
            name: "Visits",
            // xAxis: '产品4',
            label: {
              normal: {
                offset: [500, 500],

                fontSize: 14
              }
            }
          },
          {
            // xAxis: '产品9'
          }
        ]
      ]
    };
    var StackedStripChartoption = {
      title: {
        text: "Inspection Types Per Month",
        // subtext: 'gogoogogogo',
        x: "center",
        align: "right"
      },

      backgroundColor: "#fff",
      color: ["#16c2af", "#ffc751", "#4162ff", "#ff6e72", "#9692ff"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow"
        }
      },
      legend: {
        x: "center",
        top: "8%",
        data: [
          "Health & Safety inspections",
          "Late wages inspections",
          "Normal (periodic)",
          "Work Injuries (reported)"
        ]
      },
      grid: {
        //图表的位置
        top: "20%",
        left: "3%",
        right: "4%",
        bottom: "5%",
        containLabel: true
      },
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: true,
            lineStyle: {
              color: ["#f2f2f2"]
            }
          }
        }
      ],
      xAxis: [
        {
          type: "category",
          data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ]
        }
      ],
      series: [
        {
          name: "Health & Safety inspections",
          type: "bar",
          stack: "stack1",
          barWidth: "30px",
          data: [200, 100, 150, 200, 100, 150, 120, 130, 125, 180, 160, 170],
          markArea: areaStyle
        },
        {
          name: "Late wages inspections",
          type: "bar",
          stack: "stack1",
          data: [150, 100, 200, 300, 250, 190, 195, 160, 180, 120, 110, 145],
          markArea: areaStyle
        },
        {
          name: "Normal (periodic)",
          type: "bar",
          stack: "stack1",
          data: [200, 150, 231, 134, 50, 226, 145, 190, 160, 178, 180, 160],
          markArea: areaStyle
        },
        {
          name: "Work Injuries (reported)",
          type: "bar",
          stack: "stack1",
          data: [120, 132, 101, 150, 160, 170, 185, 192, 150, 160, 154, 185],
          markArea: areaStyle
        } //,
        // {
        //     name: '150',
        //     type: 'bar',
        //     stack: '总量',
        //     data: [120, 252, 201, 134, 60, 0, 150, 0],
        //     markArea: areaStyle
        // },
        // {
        //     name: '300',
        //     type: 'bar',
        //     stack: '总量',
        //     data: [120, 0, 0, 184, 70, 0, 0, 90],
        //     markArea: areaStyle
        // },
        // {
        //     name: '500',
        //     type: 'bar',
        //     stack: '总量',
        //     data: [120, 0, 0, 174, 10, 230, 0, 0],
        //     markArea: areaStyle
        // },
        // {
        //     name: '800',
        //     type: 'bar',
        //     stack: '总量',
        //     data: [220, 0, 0, 134, 70, 0, 0, 0],
        //     markArea: areaStyle
        // },
        // {
        //     name: '1000',
        //     type: 'bar',
        //     stack: '总量',
        //     data: [0, 0, 0, 0, 0, 0, 0, 90],
        //     markArea: areaStyle
        // }
      ]
    };

    StackedStripChart.setOption(StackedStripChartoption);
    // End Stacked Strip Chart
  }

  function casesStatusChart() {
    if ($("#CasesStatusChart").length == 0) {
      return false;
    }

    var casesStatusChart = echarts.init(
      document.getElementById("CasesStatusChart")
    );

    var option = {
      //tooltip: {
      //    trigger: 'item',
      //    formatter: "{a} <br/>{b}: {c} ({d}%)"
      //},
      legend: {
        orient: "vertical",
        x: "left",
        data: ["Completed", "In progress", "New"]
      },
      series: [
        {
          name: "Tasks Status",
          type: "pie",
          radius: ["40%", "55%"],
          label: {
            normal: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#eee",
              borderColor: "#aaa",
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: "#999",
                  lineHeight: 22,
                  align: "center"
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: "#aaa",
                  width: "100%",
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: "#eee",
                  backgroundColor: "#334455",
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          data: [
            { value: 348, name: "Completed" },
            { value: 251, name: "In progress" },
            { value: 147, name: "New" }
          ]
        }
      ]
    };

    casesStatusChart.setOption(option);
  }

  function riskTypesChart() {
    if ($("#riskTypesChart").length == 0) {
      return false;
    }

    var riskTypesChart = echarts.init(
      document.getElementById("riskTypesChart")
    );

    var option = {
      backgroundColor: "rgb(43, 51, 59)",
      toolbox: {
        show: true,
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          magicType: {
            show: true,
            type: ["pie", "funnel"]
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      calculable: true,
      tooltip: {
        trigger: "item",
        formatter: "{a}<br/>{b}:{c}"
      },
      // "title": {
      //   "text": "南丁格尔玫瑰图--PieHalfRose",
      //   "left": "center",
      //   "top": 20,
      //   "textStyle": {
      //     "color": "#ccc"
      //   }
      // },
      calculable: true,
      legend: {
        icon: "circle",
        x: "center",
        y: "15%",
        data: [
          "Expired license",
          "Expired Cards",
          "Pay arrears",
          "Closed OnVisit",
          "work injuries",
          "followUp Reports",
          "complaints"
        ],
        textStyle: {
          color: "#fff"
        }
      },
      series: [
        {
          name: "Risk Types",
          type: "pie",
          radius: [37, 155],
          avoidLabelOverlap: false,
          startAngle: 0,
          center: ["50.1%", "34%"],
          roseType: "area",
          selectedMode: "single",
          label: {
            normal: {
              show: true,
              formatter: "{c}"
            },
            emphasis: {
              show: true
            }
          },
          labelLine: {
            normal: {
              show: true,
              smooth: false,
              length: 20,
              length2: 10
            },
            emphasis: {
              show: true
            }
          },
          data: [
            {
              value: 600,
              name: "Expired license",
              itemStyle: {
                normal: {
                  color: "#f845f1"
                }
              }
            },
            {
              value: 1100,
              name: "Expired Cards",
              itemStyle: {
                normal: {
                  color: "#ad46f3"
                }
              }
            },
            {
              value: 1200,
              name: "Pay arrears",
              itemStyle: {
                normal: {
                  color: "#5045f6"
                }
              }
            },
            {
              value: 1300,
              name: "Closed OnVisit",
              itemStyle: {
                normal: {
                  color: "#4777f5"
                }
              }
            },
            {
              value: 1400,
              name: "work injuries",
              itemStyle: {
                normal: {
                  color: "#44aff0"
                }
              }
            },
            {
              value: 1500,
              name: "followUp Reports",
              itemStyle: {
                normal: {
                  color: "#45dbf7"
                }
              }
            },
            {
              value: 1500,
              name: "complaints",
              itemStyle: {
                normal: {
                  color: "#f6d54a"
                }
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            {
              value: 0,
              name: "",
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            }
          ]
        }
      ]
    };

    riskTypesChart.setOption(option);
  }

  function genderRatioChart() {
    if ($("#GenderRatioChart").length == 0) {
      return false;
    }

    var genderRatioChart = echarts.init(
      document.getElementById("GenderRatioChart")
    );

    var option = {
      grid: {
        left: 150,
        right: 150
      },
      xAxis: {
        type: "value",
        show: false
      },
      yAxis: {
        type: "category",
        show: false
      },
      series: [
        {
          name: "男",
          data: [-20],
          type: "bar",
          stack: "genderRatio",
          barWidth: 11,
          cursor: "default",
          itemStyle: {
            borderWidth: 3,
            borderStyle: "solid",
            borderColor: "#FFFFFF",
            color: "#16A9E6"
          },
          label: {
            show: true,
            padding: [0, 0, 40, 0],
            fontSize: 14,
            color: "#333333",
            formatter($data) {
              return Math.abs($data.data).toFixed(2) + "%";
            }
          },
          markPoint: {
            symbol:
              "image://data:image/svg+xml;base64,PHN2ZyBpZD0i57uEXzI5MDgiIGRhdGEtbmFtZT0i57uEIDI5MDgiIHhtbG5zPSJodHR" +
              "wOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9" +
              "IjAgMCAzNi45OTkgNzEuNDgiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6IHVybCgjb" +
              "GluZWFyLWdyYWRpZW50KTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW" +
              "50IiB4MT0iMC41IiB5MT0iLTAuMzU2IiB4Mj0iMC41IiB5Mj0iMSIgZ3JhZGllbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgo" +
              "gICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMxYmM4ZmMiIHN0b3Atb3BhY2l0eT0iMC43OCIvPgogICAgICA8c3Rv" +
              "cCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMTg0YjkiIHN0b3Atb3BhY2l0eT0iMC42OTQiLz4KICAgIDwvbGluZWFyR3JhZGllb" +
              "nQ+CiAgPC9kZWZzPgogIDxwYXRoIGlkPSLot6/lvoRfMjM1IiBkYXRhLW5hbWU9Iui3r+W+hCAyMzUiIGNsYXNzPSJjbHMtMSIgZD" +
              "0iTTEyLjg5MSwxNDguMzc5QTE4Ljg3NiwxOC44NzYsMCwwLDAsMCwxNjYuNDg2djEyLjkyMWExLjE2NywxLjE2NywwLDAsMCwxLjE" +
              "1NiwxLjE1Nkg3LjM5NHYxNS42YS45NzQuOTc0LDAsMCwwLC45NzguOTYzSDI4LjYyN2EuOTc0Ljk3NCwwLDAsMCwuOTc4LS45NjN2" +
              "LTE1LjZoNC44MTZBMi41OCwyLjU4LDAsMCwwLDM3LDE3Ny45ODRWMTY1LjMzYzAtMTEuNjQ3LTEyLjEyMS0yMC43NDUtMjQuMTA4L" +
              "TE2Ljk1MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTEyNS42NDkpIi8+CiAgPHBhdGggaWQ9Iui3r+W+hF8yMzYiIGRhdGEtbm" +
              "FtZT0i6Lev5b6EIDIzNiIgY2xhc3M9ImNscy0xIiBkPSJNNzMuOCwxMC43QTEwLjc1LDEwLjc1LDAsMSwwLDYzLjA1OCwyMS40LDE" +
              "wLjc0NCwxMC43NDQsMCwwLDAsNzMuOCwxMC43Wm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NC41NSkiLz4KPC9zdmc+Cg==",
            symbolSize: [48, 72],
            symbolOffset: [-48, 0],
            label: {
              position: "bottom",
              padding: [10, 0, 0, 0],
              fontSize: 14,
              color: "#333333",
              formatter: "Male"
            },
            data: [
              {
                type: "max"
              }
            ],
            silent: true
          }
        },
        {
          name: "女",
          data: [80],
          type: "bar",
          stack: "genderRatio",
          barWidth: 11,
          cursor: "default",
          itemStyle: {
            borderWidth: 3,
            borderStyle: "solid",
            borderColor: "#FFFFFF",
            color: "#05A07D"
          },
          label: {
            show: true,
            padding: [0, 0, 40, 0],
            fontSize: 14,
            color: "#333333",
            formatter($data) {
              return Math.abs($data.data).toFixed(2) + "%";
            }
          },
          markPoint: {
            symbol:
              "image://data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5" +
              "rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMzcuOTYgNjkuNSI+CiAgPGRlZnM+CiAgICA8c3R5" +
              "bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogdXJsKCNsaW5lYXItZ3JhZGllbnQpOwogICAgICB9CiAgICA8L3N0eWxlP" +
              "gogICAgPGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQiIHgxPSIwLjUiIHgyPSIwLjUiIHkyPSIxIiBncmFkaWVudF" +
              "VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAzZWJiNyIvPgogICA" +
              "gICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGEzN2YiIHN0b3Atb3BhY2l0eT0iMC42OTQiLz4KICAgIDwvbGluZWFy" +
              "R3JhZGllbnQ+CiAgPC9kZWZzPgogIDxnIGlkPSLnu4RfMjkwOSIgZGF0YS1uYW1lPSLnu4QgMjkwOSIgdHJhbnNmb3JtPSJ0cmFuc" +
              "2xhdGUoMC4wNjIpIj4KICAgIDxwYXRoIGlkPSLot6/lvoRfMjM3IiBkYXRhLW5hbWU9Iui3r+W+hCAyMzciIGNsYXNzPSJjbHMtMS" +
              "IgZD0iTTc5LjQzNiwxMC40NjdBMTAuNTE4LDEwLjUxOCwwLDEsMCw2OC45MjUsMjAuOTM0LDEwLjUxMiwxMC41MTIsMCwwLDAsNzk" +
              "uNDM2LDEwLjQ2N1ptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDkuOTg2KSIvPgogICAgPHBhdGggaWQ9Iui3r+W+hF8yMzgi" +
              "IGRhdGEtbmFtZT0i6Lev5b6EIDIzOCIgY2xhc3M9ImNscy0xIiBkPSJNMzcuNzg1LDE3Ni4wODNsLTUuNzU1LTIyLjVhMTMuNDE5L" +
              "DEzLjQxOSwwLDAsMC0yNi4xODItLjIxN2wtNS44LDIyLjdhMy44MjUsMy44MjUsMCwwLDAsLjY2NywzLjIxOCwzLjc1OCwzLjc1OC" +
              "wwLDAsMCwyLjkyOCwxLjQ3OXMyLjgyNy4wNTgsNS4wNi4wNzJjLjcyNSwyLjE0NiwxLjc4Myw1LjI5MiwyLjc1NCw4LjM1QTMuNzI" +
              "xLDMuNzIxLDAsMCwwLDE1LDE5MS43NjloNy44NThhMy42NzcsMy42NzcsMCwwLDAsMy41MDgtMi41NTJjLjk3MS0zLjA1OSwyLjA1" +
              "OS02LjMwNiwyLjc2OS04LjQ1MiwyLjIzMy0uMDE1LDUuMDYtLjAyOSw1LjA2LS4wMjlhMy43NjYsMy43NjYsMCwwLDAsMi45MjgtM" +
              "S40NjQsMy42ODUsMy42ODUsMCwwLDAsLjY2Ny0zLjE4OVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xMjIuMjY5KSIvPg" +
              "ogIDwvZz4KPC9zdmc+Cg==",
            symbolSize: [48, 72],
            symbolOffset: [48, 0],
            label: {
              position: "bottom",
              padding: [10, 0, 0, 0],
              fontSize: 14,
              color: "#333333",
              formatter: "Female"
            },
            data: [
              {
                type: "max"
              }
            ],
            silent: true
          }
        }
      ]
    };

    genderRatioChart.setOption(option);
  }

  function max(data) {
    var max = data[0];
    for (var i = 0; i < data.length; i++) {
      if (max < data[i]) {
        max = data[i];
      }
    }
    return max;
  }

  function nationalitiesChart() {
    if ($("#NationalitiesChart").length == 0) {
      return false;
    }

    var nationalitiesChart = echarts.init(
      document.getElementById("NationalitiesChart")
    );
    var src =
      "data:image/png;base64,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";
    var data = [10, 30, 50, 40, 60, 50, 30];

    var bgData = [];
    for (var i = 0; i < data.length; i++) {
      bgData.push(max(data));
    }

    var option = {
      xAxis: {
        data: ["Italy", "France", "Egypt", "Spain", "Georgia", "UAE", "USA"],
        axisTick: {
          alignWithLabel: true,
          length: 0
        },
        axisLine: {
          lineStyle: {
            width: 3
            // color: 'rgb(162,218,224)'
          }
        },
        axisLabel: {
          // color: 'rgb(170,242,254)',
          fontSize: 14,
          formatter: function(param) {
            // return param.slice(0, 2)
            return param;
          }
        }
      },
      yAxis: {
        axisTick: {
          lineStyle: {
            // color: 'rgb(162,218,224)',
            width: 2
          }
        },
        axisLine: {
          lineStyle: {
            width: 3
            // color: 'rgb(162,218,224)'
          }
        },
        axisLabel: {
          // color: 'rgb(170,242,254)',
          fontSize: 12,
          formatter: "{value}%"
        },
        splitLine: {
          lineStyle: {
            // color: 'rgb(51,86,131)'
          }
        }
      },
      series: [
        {
          //如果不需要背景色  可以把此 bar删掉  上方求bgData的过程删掉
          type: "bar",
          data: bgData,
          tooltip: {
            show: false
          },
          silent: true,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,.3)"
            }
          }
        },
        {
          type: "bar",
          data: data,
          barGap: "-100%",
          barCategoryGap: "50%",
          itemStyle: {
            normal: {
              // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: 'rgba(0, 227, 252, 0.8)'//起始色  可以自己设置
              // }, {
              //   offset: 1,
              //   color: 'rgba(0, 227, 252,0.2)'//结束色
              // }], false),
              // borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              //   offset: 0,
              //   color: 'rgba(255, 255, 255, 1)'//起始色  可以自己设置
              // }, {
              //   offset: 0.05,
              //   color: 'rgba(0, 227, 252,0)'//结束色
              // }], false),
              borderWidth: 15
            }
          },
          label: {
            show: true,
            position: "top",
            padding: [5, 10],
            fontSize: 26,
            width: 60,
            color: "rgb(233,235,4)",
            formatter: "{c}%",
            backgroundColor: {
              image: src
            },
            rich: {}
          }
        }
      ]
    };

    nationalitiesChart.setOption(option);
  }
});

function deathCasesChart() {
  var deathCasesChart = echarts.init(
    document.getElementById("death-cases-map")
  );
  option = {
    title: {
      text: "Death cases",
      subtext: "Death cases in hazards sectors"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["2017", "2018"]
    },
    toolbox: {
      show: true,
      language: "en",
      feature: {
        dataZoom: {},
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}"
      }
    },
    series: [
      {
        name: "2017",
        type: "line",
        data: [11, 11, 15, 13, 12, 13, 10, 29, 17, 30, 12, 17],
        markPoint: {
          data: [{ type: "max", name: "" }, { type: "min", name: "" }]
        },
        markLine: {
          data: [{ type: "average", name: "" }]
        }
      },
      {
        name: "2018",
        type: "line",
        data: [1, 18, 22, 15, 33, 12, 43, 34, 12, 10, 19, 45],
        markPoint: {
          data: [{ type: "max", name: "" }, { type: "min", name: "" }]
        },
        markLine: {
          data: [{ type: "average", name: "average" }]
        }
      }
    ]
  };

  deathCasesChart.setOption(option);
}
function violationChart() {
  var violationChart = echarts.init(
    document.getElementById("violations-chart")
  );
  option = {
    title: {
      text: "Violations ",
      subtext: "comparison between violation categories monthly"
    },
    tooltip: {
      trigger: "axis"
    },
    legend: {
      data: ["Danger", "Medium", "Low"]
    },
    toolbox: {
      show: true,
      language: "en",
      feature: {
        dataZoom: {},
        dataView: { readOnly: false },
        magicType: { type: ["line", "bar"] },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ]
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: "{value}"
      }
    },
    series: [
      {
        name: "Danger",
        type: "line",
        data: [110, 111, 115, 153, 122, 113, 110, 229, 117, 230, 112, 117],
        markPoint: {
          data: [{ type: "max", name: "" }, { type: "min", name: "" }]
        },
        markLine: {
          data: [{ type: "average", name: "" }]
        }
      },
      {
        name: "Medium",
        type: "line",
        data: [211, 128, 212, 145, 353, 125, 435, 345, 132, 104, 191, 415],
        markPoint: {
          data: [{ type: "max", name: "" }, { type: "min", name: "" }]
        },
        markLine: {
          data: [{ type: "average", name: "average" }]
        }
      },
      {
        name: "Low",
        type: "line",
        data: [
          2101,
          1128,
          1212,
          2145,
          1353,
          1125,
          2435,
          1345,
          1132,
          2104,
          1391,
          1415
        ],
        markPoint: {
          data: [{ type: "max", name: "" }, { type: "min", name: "" }]
        },
        markLine: {
          data: [{ type: "average", name: "average" }]
        }
      }
    ]
  };

  violationChart.setOption(option);
}
