window.BENCHMARK_DATA = {
  "lastUpdate": 1608054861454,
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
        "date": 1608049888768,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1146853.2992343938,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018424723656788475",
            "extra": "mean: 871.9511036569116 nsec\nrounds: 56180"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1670900.7694135092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013139334178495796",
            "extra": "mean: 598.4795855656963 nsec\nrounds: 136987"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 84899.05596359848,
            "unit": "iter/sec",
            "range": "stddev: 0.000013442467340569404",
            "extra": "mean: 11.7786939872307 usec\nrounds: 183"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 457507.69476827927,
            "unit": "iter/sec",
            "range": "stddev: 0.00001106251329424256",
            "extra": "mean: 2.185755587141512 usec\nrounds: 78126"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jpmelos@gmail.com",
            "name": "João Sampaio",
            "username": "jpmelos"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20c1cb994b607ff4f121b98490753e412834233e",
          "message": "When Flask activation is missing, do not emit a log message (#253)\n\nIf a Flask request doesn't have an active span, it just means that it\r\nwas initialized via a mechanism that doesn't run `before_request`, like\r\n`app.test_request_context` or even manually. It is okay and\r\ninstrumentation still works.",
          "timestamp": "2020-12-15T09:53:07-08:00",
          "tree_id": "b1eb0a785a30e66b5e9f675332c9717cbd64f18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/20c1cb994b607ff4f121b98490753e412834233e"
        },
        "date": 1608054841910,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1175945.5005199965,
            "unit": "iter/sec",
            "range": "stddev: 0.000002690390719775349",
            "extra": "mean: 850.3795452746795 nsec\nrounds: 79366"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1637881.922866189,
            "unit": "iter/sec",
            "range": "stddev: 0.000009110025602080595",
            "extra": "mean: 610.5446223193329 nsec\nrounds: 196079"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 107803.00696691932,
            "unit": "iter/sec",
            "range": "stddev: 0.000009017070181353034",
            "extra": "mean: 9.276179098667093 usec\nrounds: 134"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 510055.47265686584,
            "unit": "iter/sec",
            "range": "stddev: 0.000012272751976983485",
            "extra": "mean: 1.9605710625768327 usec\nrounds: 80000"
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
      },
      {
        "commit": {
          "author": {
            "email": "jpmelos@gmail.com",
            "name": "João Sampaio",
            "username": "jpmelos"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20c1cb994b607ff4f121b98490753e412834233e",
          "message": "When Flask activation is missing, do not emit a log message (#253)\n\nIf a Flask request doesn't have an active span, it just means that it\r\nwas initialized via a mechanism that doesn't run `before_request`, like\r\n`app.test_request_context` or even manually. It is okay and\r\ninstrumentation still works.",
          "timestamp": "2020-12-15T09:53:07-08:00",
          "tree_id": "b1eb0a785a30e66b5e9f675332c9717cbd64f18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/20c1cb994b607ff4f121b98490753e412834233e"
        },
        "date": 1608054833655,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1322021.4809850177,
            "unit": "iter/sec",
            "range": "stddev: 1.2469416154998283e-7",
            "extra": "mean: 756.4173611270792 nsec\nrounds: 59524"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1683478.299267827,
            "unit": "iter/sec",
            "range": "stddev: 1.1972593527133483e-7",
            "extra": "mean: 594.0082509141441 nsec\nrounds: 135136"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 87828.80912494133,
            "unit": "iter/sec",
            "range": "stddev: 0.000008749317206840019",
            "extra": "mean: 11.385785711581775 usec\nrounds: 14"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 509158.90153502795,
            "unit": "iter/sec",
            "range": "stddev: 2.1345005849819703e-7",
            "extra": "mean: 1.9640234060234816 usec\nrounds: 70922"
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
        "date": 1608049884628,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1004698.0014992382,
            "unit": "iter/sec",
            "range": "stddev: 4.923329534936473e-7",
            "extra": "mean: 995.3239665130938 nsec\nrounds: 94340"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1428754.8064761173,
            "unit": "iter/sec",
            "range": "stddev: 5.042877869262363e-7",
            "extra": "mean: 699.9101563594395 nsec\nrounds: 109891"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 42991.522036917864,
            "unit": "iter/sec",
            "range": "stddev: 0.000016244035522874717",
            "extra": "mean: 23.26040001889851 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 254304.7411783435,
            "unit": "iter/sec",
            "range": "stddev: 0.000001165066197380553",
            "extra": "mean: 3.9322900366167435 usec\nrounds: 43860"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jpmelos@gmail.com",
            "name": "João Sampaio",
            "username": "jpmelos"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20c1cb994b607ff4f121b98490753e412834233e",
          "message": "When Flask activation is missing, do not emit a log message (#253)\n\nIf a Flask request doesn't have an active span, it just means that it\r\nwas initialized via a mechanism that doesn't run `before_request`, like\r\n`app.test_request_context` or even manually. It is okay and\r\ninstrumentation still works.",
          "timestamp": "2020-12-15T09:53:07-08:00",
          "tree_id": "b1eb0a785a30e66b5e9f675332c9717cbd64f18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/20c1cb994b607ff4f121b98490753e412834233e"
        },
        "date": 1608054837503,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 908407.5287298963,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016623699933357328",
            "extra": "mean: 1.10082751229304 usec\nrounds: 49505"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1244429.4459276458,
            "unit": "iter/sec",
            "range": "stddev: 0.000005634187181051187",
            "extra": "mean: 803.5811136360256 nsec\nrounds: 175439"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 40915.52580895769,
            "unit": "iter/sec",
            "range": "stddev: 0.00001652207584301944",
            "extra": "mean: 24.440599997888057 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 208221.81911639788,
            "unit": "iter/sec",
            "range": "stddev: 0.000005200135052654941",
            "extra": "mean: 4.802570663552752 usec\nrounds: 42016"
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
        "date": 1608049880678,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 923814.1681740482,
            "unit": "iter/sec",
            "range": "stddev: 7.972368576212881e-7",
            "extra": "mean: 1.0824687847952537 usec\nrounds: 57472"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1266267.6019883887,
            "unit": "iter/sec",
            "range": "stddev: 1.4868265257641944e-7",
            "extra": "mean: 789.7224871186191 nsec\nrounds: 111112"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 39432.1766461099,
            "unit": "iter/sec",
            "range": "stddev: 0.000017594828796663404",
            "extra": "mean: 25.360000006457994 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 217001.47371356987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023787866094163082",
            "extra": "mean: 4.6082636347435395 usec\nrounds: 41842"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jpmelos@gmail.com",
            "name": "João Sampaio",
            "username": "jpmelos"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20c1cb994b607ff4f121b98490753e412834233e",
          "message": "When Flask activation is missing, do not emit a log message (#253)\n\nIf a Flask request doesn't have an active span, it just means that it\r\nwas initialized via a mechanism that doesn't run `before_request`, like\r\n`app.test_request_context` or even manually. It is okay and\r\ninstrumentation still works.",
          "timestamp": "2020-12-15T09:53:07-08:00",
          "tree_id": "b1eb0a785a30e66b5e9f675332c9717cbd64f18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/20c1cb994b607ff4f121b98490753e412834233e"
        },
        "date": 1608054838426,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1199774.1759133774,
            "unit": "iter/sec",
            "range": "stddev: 0.000001159997499871535",
            "extra": "mean: 833.4901851331389 nsec\nrounds: 76924"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1631767.7246999016,
            "unit": "iter/sec",
            "range": "stddev: 9.55004013110718e-7",
            "extra": "mean: 612.8323197371183 nsec\nrounds: 178572"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 46904.31519911772,
            "unit": "iter/sec",
            "range": "stddev: 0.00001398917438531551",
            "extra": "mean: 21.319999999036554 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 250897.0249672822,
            "unit": "iter/sec",
            "range": "stddev: 0.000007400826221799734",
            "extra": "mean: 3.985698914247402 usec\nrounds: 57472"
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
        "date": 1608049886626,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3790099.2526031854,
            "unit": "iter/sec",
            "range": "stddev: 4.116942848786216e-8",
            "extra": "mean: 263.8453331567508 nsec\nrounds: 45249"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7454697.49154775,
            "unit": "iter/sec",
            "range": "stddev: 3.19033225487158e-8",
            "extra": "mean: 134.1436055766229 nsec\nrounds: 93458"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 593635.7172374562,
            "unit": "iter/sec",
            "range": "stddev: 4.014169303803958e-7",
            "extra": "mean: 1.684534759218346 usec\nrounds: 68028"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2882901.964523066,
            "unit": "iter/sec",
            "range": "stddev: 5.223180475178086e-7",
            "extra": "mean: 346.87270406905145 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jpmelos@gmail.com",
            "name": "João Sampaio",
            "username": "jpmelos"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "20c1cb994b607ff4f121b98490753e412834233e",
          "message": "When Flask activation is missing, do not emit a log message (#253)\n\nIf a Flask request doesn't have an active span, it just means that it\r\nwas initialized via a mechanism that doesn't run `before_request`, like\r\n`app.test_request_context` or even manually. It is okay and\r\ninstrumentation still works.",
          "timestamp": "2020-12-15T09:53:07-08:00",
          "tree_id": "b1eb0a785a30e66b5e9f675332c9717cbd64f18d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/20c1cb994b607ff4f121b98490753e412834233e"
        },
        "date": 1608054860614,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3506947.22568423,
            "unit": "iter/sec",
            "range": "stddev: 5.441218038977456e-7",
            "extra": "mean: 285.14828870998815 nsec\nrounds: 46725"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7350584.219330849,
            "unit": "iter/sec",
            "range": "stddev: 3.508563558895738e-7",
            "extra": "mean: 136.04360825767807 nsec\nrounds: 103083"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 493400.5427801696,
            "unit": "iter/sec",
            "range": "stddev: 0.000008120354812155368",
            "extra": "mean: 2.026750911876332 usec\nrounds: 64099"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2521957.9758760016,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019120814585964414",
            "extra": "mean: 396.5173129630785 nsec\nrounds: 185186"
          }
        ]
      }
    ]
  }
}