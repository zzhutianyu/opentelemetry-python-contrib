window.BENCHMARK_DATA = {
  "lastUpdate": 1607984229968,
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
      }
    ]
  }
}