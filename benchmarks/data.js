window.BENCHMARK_DATA = {
  "lastUpdate": 1608049862376,
  "repoUrl": "https://github.com/open-telemetry/opentelemetry-python-contrib",
  "entries": {
    "OpenTelemetry Python Benchmarks - Python 3.8 - sdkextension": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b830771d53232bbfcfe4e601f37736f5a04c33d",
          "message": "Only commit benchmark results to master folder (#250)",
          "timestamp": "2020-12-14T14:16:11-08:00",
          "tree_id": "78afc1456a54b0ce6752c2915233795aa4c4bd8f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/4b830771d53232bbfcfe4e601f37736f5a04c33d"
        },
        "date": 1607984222915,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1325287.7870578922,
            "unit": "iter/sec",
            "range": "stddev: 3.3523452602583426e-7",
            "extra": "mean: 754.5530938755396 nsec\nrounds: 81968"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1840929.1119415048,
            "unit": "iter/sec",
            "range": "stddev: 2.785551734674673e-7",
            "extra": "mean: 543.2039688618792 nsec\nrounds: 153847"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 126610.58904394347,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028051429572403493",
            "extra": "mean: 7.898233532843957 usec\nrounds: 167"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 541574.2521982065,
            "unit": "iter/sec",
            "range": "stddev: 4.3368487974790587e-7",
            "extra": "mean: 1.8464688746576856 usec\nrounds: 69445"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.7 - sdkextension": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b830771d53232bbfcfe4e601f37736f5a04c33d",
          "message": "Only commit benchmark results to master folder (#250)",
          "timestamp": "2020-12-14T14:16:11-08:00",
          "tree_id": "78afc1456a54b0ce6752c2915233795aa4c4bd8f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/4b830771d53232bbfcfe4e601f37736f5a04c33d"
        },
        "date": 1607984229161,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1124270.9115811512,
            "unit": "iter/sec",
            "range": "stddev: 3.190285808570788e-7",
            "extra": "mean: 889.4653323313514 nsec\nrounds: 72993"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1478185.6695098986,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014454153349699252",
            "extra": "mean: 676.5050024680297 nsec\nrounds: 133334"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 64846.41638557241,
            "unit": "iter/sec",
            "range": "stddev: 0.000007516330253607078",
            "extra": "mean: 15.421052630789458 usec\nrounds: 38"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 445994.6671230855,
            "unit": "iter/sec",
            "range": "stddev: 5.930902249640931e-7",
            "extra": "mean: 2.242179276381392 usec\nrounds: 50001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lechen@microsoft.com",
            "name": "Leighton Chen",
            "username": "lzchen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dc24b9d0b400013117b733aaaa2d91240e39fd66",
          "message": "Fix build (#258)",
          "timestamp": "2020-12-15T08:30:01-08:00",
          "tree_id": "a22740bc52ee6ae6df61d7d08933c71edb156372",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/dc24b9d0b400013117b733aaaa2d91240e39fd66"
        },
        "date": 1608049860880,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1067781.9839756417,
            "unit": "iter/sec",
            "range": "stddev: 1.4279454845284703e-7",
            "extra": "mean: 936.5207645447707 nsec\nrounds: 79366"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1292588.530627537,
            "unit": "iter/sec",
            "range": "stddev: 3.2713184531040985e-7",
            "extra": "mean: 773.6413996451844 nsec\nrounds: 158731"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 114469.09434214623,
            "unit": "iter/sec",
            "range": "stddev: 0.000003072027957177485",
            "extra": "mean: 8.735982456635993 usec\nrounds: 114"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 433632.7842442876,
            "unit": "iter/sec",
            "range": "stddev: 3.131746112726932e-7",
            "extra": "mean: 2.3060986999466553 usec\nrounds: 70922"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.6 - sdkextension": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b830771d53232bbfcfe4e601f37736f5a04c33d",
          "message": "Only commit benchmark results to master folder (#250)",
          "timestamp": "2020-12-14T14:16:11-08:00",
          "tree_id": "78afc1456a54b0ce6752c2915233795aa4c4bd8f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/4b830771d53232bbfcfe4e601f37736f5a04c33d"
        },
        "date": 1607984239192,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1060598.0867813153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031919900738727357",
            "extra": "mean: 942.8642314779038 nsec\nrounds: 74627"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1549619.1280499382,
            "unit": "iter/sec",
            "range": "stddev: 0.000001283570967228015",
            "extra": "mean: 645.3198607959966 nsec\nrounds: 43669"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 51932.76437565392,
            "unit": "iter/sec",
            "range": "stddev: 0.00001181964631734884",
            "extra": "mean: 19.255666668666688 usec\nrounds: 9"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 226763.9747378561,
            "unit": "iter/sec",
            "range": "stddev: 0.000004145157976231196",
            "extra": "mean: 4.409871546642367 usec\nrounds: 54946"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python 3.5 - sdkextension": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b830771d53232bbfcfe4e601f37736f5a04c33d",
          "message": "Only commit benchmark results to master folder (#250)",
          "timestamp": "2020-12-14T14:16:11-08:00",
          "tree_id": "78afc1456a54b0ce6752c2915233795aa4c4bd8f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/4b830771d53232bbfcfe4e601f37736f5a04c33d"
        },
        "date": 1607984243350,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 949573.8439597469,
            "unit": "iter/sec",
            "range": "stddev: 0.000001419631647843738",
            "extra": "mean: 1.0531039859206472 usec\nrounds: 78126"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1222054.2654493044,
            "unit": "iter/sec",
            "range": "stddev: 0.000005927598208599536",
            "extra": "mean: 818.2942675072918 nsec\nrounds: 175439"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 22851.91956135132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000485220877515282",
            "extra": "mean: 43.75999999979285 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 212940.57722894728,
            "unit": "iter/sec",
            "range": "stddev: 0.000004735641604954726",
            "extra": "mean: 4.696145812194499 usec\nrounds: 49262"
          }
        ]
      }
    ],
    "OpenTelemetry Python Benchmarks - Python pypy3 - sdkextension": [
      {
        "commit": {
          "author": {
            "email": "enowell@amazon.com",
            "name": "(Eliseo) Nathaniel Ruiz Nowell",
            "username": "NathanielRN"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4b830771d53232bbfcfe4e601f37736f5a04c33d",
          "message": "Only commit benchmark results to master folder (#250)",
          "timestamp": "2020-12-14T14:16:11-08:00",
          "tree_id": "78afc1456a54b0ce6752c2915233795aa4c4bd8f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/4b830771d53232bbfcfe4e601f37736f5a04c33d"
        },
        "date": 1607984243973,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4508874.612313297,
            "unit": "iter/sec",
            "range": "stddev: 5.298973219348354e-8",
            "extra": "mean: 221.784832354665 nsec\nrounds: 50762"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8981879.005348533,
            "unit": "iter/sec",
            "range": "stddev: 2.4714744970917582e-8",
            "extra": "mean: 111.33527844277617 nsec\nrounds: 105264"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 689824.5641883397,
            "unit": "iter/sec",
            "range": "stddev: 0.000003911609715380688",
            "extra": "mean: 1.4496439412484596 usec\nrounds: 73530"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3278053.3306358294,
            "unit": "iter/sec",
            "range": "stddev: 4.072664567785692e-7",
            "extra": "mean: 305.05910036745496 nsec\nrounds: 192308"
          }
        ]
      }
    ]
  }
}