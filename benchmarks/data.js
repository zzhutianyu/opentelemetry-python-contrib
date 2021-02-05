window.BENCHMARK_DATA = {
  "lastUpdate": 1612545058141,
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
      },
      {
        "commit": {
          "author": {
            "email": "moaddib666@gmail.com",
            "name": "Max Nikitenko",
            "username": "moaddib666"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "187987d9ccc359ca2b1e72cfafd10d184c3ab655",
          "message": "Feature/urllib instrumentation (#222)",
          "timestamp": "2020-12-15T10:11:33-08:00",
          "tree_id": "0b35fa021a647e4c9db902738c9ab8f2cbaa2d59",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/187987d9ccc359ca2b1e72cfafd10d184c3ab655"
        },
        "date": 1608055947111,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1377940.044293317,
            "unit": "iter/sec",
            "range": "stddev: 3.743569560951687e-7",
            "extra": "mean: 725.7209804892888 nsec\nrounds: 67110"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2048637.2598382563,
            "unit": "iter/sec",
            "range": "stddev: 9.076266036915472e-8",
            "extra": "mean: 488.12936267641237 nsec\nrounds: 136987"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 140256.41064860817,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030582572764965684",
            "extra": "mean: 7.129798883170859 usec\nrounds: 179"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 585594.286507519,
            "unit": "iter/sec",
            "range": "stddev: 1.8416347255094443e-7",
            "extra": "mean: 1.707666934327509 usec\nrounds: 68494"
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
          "id": "65801c31d8eba6c3625c29d610b67a97ed547a31",
          "message": "Fix requests and urllib instrumentations span name callback parameters (#259)",
          "timestamp": "2020-12-16T08:17:23-08:00",
          "tree_id": "595b2219804af9c1545baf22673099f5ac2b41e4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/65801c31d8eba6c3625c29d610b67a97ed547a31"
        },
        "date": 1608135494050,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1142357.19595613,
            "unit": "iter/sec",
            "range": "stddev: 4.83110611231946e-7",
            "extra": "mean: 875.3829393642677 nsec\nrounds: 67559"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1688864.6200044097,
            "unit": "iter/sec",
            "range": "stddev: 2.6086447821562887e-7",
            "extra": "mean: 592.1137716754283 nsec\nrounds: 104156"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 124236.80639849509,
            "unit": "iter/sec",
            "range": "stddev: 0.000002610906041692378",
            "extra": "mean: 8.049144444299827 usec\nrounds: 180"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 520439.582006657,
            "unit": "iter/sec",
            "range": "stddev: 4.778246722365812e-7",
            "extra": "mean: 1.9214526230774065 usec\nrounds: 65781"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "azfaarq@amazon.com",
            "name": "Azfaar Qureshi",
            "username": "AzfaarQureshi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6f5b90aeb181bf24a4c64f34e74012b5b246e51",
          "message": "Prometheus Remote Write Exporter (6/6) (#227)\n\n* adding README\r\n\r\nadding sample app\r\n\r\nadding examples readme\r\n\r\nfixing lint errors\r\n\r\nlinting examples\r\n\r\nupdating readme tls_config example\r\n\r\nexcluding examples\r\n\r\nadding examples to exclude in all linters\r\n\r\nadding isort.cfg skip\r\n\r\nchanging isort to path\r\n\r\nignoring yml only\r\n\r\nadding it to excluded directories in pylintrc\r\n\r\nonly adding exclude to directory\r\n\r\nremoving readme.rst and adding explicit file names to ignore\r\n\r\nadding the rest of the files\r\n\r\nadding readme.rst back\r\n\r\nadding to ignore glob instead\r\n\r\nreverting back to ignore list\r\n\r\nconverting README.md to README.rst\r\n\r\n* addressing readme comments\r\n\r\n* adding link to spec for details on aggregators\r\n\r\n* updating readme\r\n\r\n* adding python-snappy to setup.cfg",
          "timestamp": "2020-12-22T11:06:22-08:00",
          "tree_id": "4478cadeaead5e63e0e180f5d1fe3a78d0046e1d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f6f5b90aeb181bf24a4c64f34e74012b5b246e51"
        },
        "date": 1608664042027,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1223207.698752125,
            "unit": "iter/sec",
            "range": "stddev: 2.0345142187792334e-7",
            "extra": "mean: 817.5226505033987 nsec\nrounds: 70418"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1704861.11282211,
            "unit": "iter/sec",
            "range": "stddev: 1.5318792464992398e-7",
            "extra": "mean: 586.5580442178475 nsec\nrounds: 163935"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 129182.59106418815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027644483274542217",
            "extra": "mean: 7.740981131916766 usec\nrounds: 159"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 506034.47869957355,
            "unit": "iter/sec",
            "range": "stddev: 2.841592575581301e-7",
            "extra": "mean: 1.9761499306723875 usec\nrounds: 64103"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adamantike@users.noreply.github.com",
            "name": "Michael Manganiello",
            "username": "adamantike"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9ea61cfd8a991adec22325f28357f9ff02ef32f",
          "message": "Celery: Add support for new major version 5.x (#266)",
          "timestamp": "2020-12-22T15:48:23-08:00",
          "tree_id": "d2f04b14c3bbff2f7f897e71e3501154087dbaa8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f9ea61cfd8a991adec22325f28357f9ff02ef32f"
        },
        "date": 1608680958184,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1328307.3200017572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028052409244962466",
            "extra": "mean: 752.8378297265403 nsec\nrounds: 60603"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1816934.2945415815,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022873374978332882",
            "extra": "mean: 550.3776350109035 nsec\nrounds: 200000"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 125890.74434546802,
            "unit": "iter/sec",
            "range": "stddev: 0.000001875955755565289",
            "extra": "mean: 7.943395721418651 usec\nrounds: 187"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 525513.7664479208,
            "unit": "iter/sec",
            "range": "stddev: 0.000003872706461799446",
            "extra": "mean: 1.9028997218460144 usec\nrounds: 78741"
          }
        ]
      },
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
          "id": "cfaa2b7fff6121d52fc2deb74a9558d75cb1197f",
          "message": "Set max number of commits in performance graph (#270)",
          "timestamp": "2020-12-22T16:32:58-08:00",
          "tree_id": "24384fa664e8f32dfa4e748ae5f0febbdee064a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cfaa2b7fff6121d52fc2deb74a9558d75cb1197f"
        },
        "date": 1608683625485,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1201088.0883027865,
            "unit": "iter/sec",
            "range": "stddev: 0.000002341486605691159",
            "extra": "mean: 832.5784009839473 nsec\nrounds: 65790"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1622435.5718490256,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028320664170827687",
            "extra": "mean: 616.357294767853 nsec\nrounds: 196079"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 105985.15962544679,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016189517768771887",
            "extra": "mean: 9.435283237143913 usec\nrounds: 173"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 492553.6690573225,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028372143648991044",
            "extra": "mean: 2.030235612524941 usec\nrounds: 74075"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df79be6ea935073ba94c80f19ecd4360565ef36b",
          "message": "Add CodeQL analysis (#277)",
          "timestamp": "2020-12-31T12:52:03-08:00",
          "tree_id": "2465c1d4e58cc81e70324a35aba97ba2225a6fbd",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/df79be6ea935073ba94c80f19ecd4360565ef36b"
        },
        "date": 1609447965840,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1473769.9664008694,
            "unit": "iter/sec",
            "range": "stddev: 1.1312828591609044e-7",
            "extra": "mean: 678.5319437891146 nsec\nrounds: 75758"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 3106920.150561653,
            "unit": "iter/sec",
            "range": "stddev: 1.5763897980778518e-8",
            "extra": "mean: 321.8621501486625 nsec\nrounds: 140846"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 144675.47091923232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018911204903951642",
            "extra": "mean: 6.9120217383516795 usec\nrounds: 184"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 581413.8545528578,
            "unit": "iter/sec",
            "range": "stddev: 8.618237073370335e-7",
            "extra": "mean: 1.7199452544333678 usec\nrounds: 80646"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "472f84538144c1a8cc7260ae67c5dad17abb32bb",
          "message": "Upgrade isort and enable black compat mode (#248)",
          "timestamp": "2021-01-05T07:23:53-08:00",
          "tree_id": "af865a041531f974faba5248eccc4d7c7b4da4a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/472f84538144c1a8cc7260ae67c5dad17abb32bb"
        },
        "date": 1609860292178,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1476981.0388616526,
            "unit": "iter/sec",
            "range": "stddev: 1.3073847079439845e-7",
            "extra": "mean: 677.0567621983325 nsec\nrounds: 76336"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2009482.4407659573,
            "unit": "iter/sec",
            "range": "stddev: 1.1815162688718218e-7",
            "extra": "mean: 497.64057635598374 nsec\nrounds: 178572"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 143178.49044257184,
            "unit": "iter/sec",
            "range": "stddev: 0.000002669790392374656",
            "extra": "mean: 6.984289308463515 usec\nrounds: 159"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 571288.4326470286,
            "unit": "iter/sec",
            "range": "stddev: 1.6865065236111095e-7",
            "extra": "mean: 1.7504292802964059 usec\nrounds: 67110"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fea7f7a2709b0c846934bafb27f3c1c1e415eea",
          "message": "Ensure SQLAlchemy spans have kind set to CLIENT (#278)\n\nSQLAlchemy spans were missing kind field and it was being set to\r\ninternal instead of client. This commit changes sqlalchemy spans to have\r\nkind set to \"client\" instead.",
          "timestamp": "2021-01-05T09:05:58-08:00",
          "tree_id": "52b5dfa2eb3a72e0a8e28d1b94bfa4ad3b7a485f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/9fea7f7a2709b0c846934bafb27f3c1c1e415eea"
        },
        "date": 1609866405620,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1507170.358470889,
            "unit": "iter/sec",
            "range": "stddev: 1.357033780410902e-7",
            "extra": "mean: 663.4950019947031 nsec\nrounds: 84034"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1989121.5174948995,
            "unit": "iter/sec",
            "range": "stddev: 8.363826317049084e-8",
            "extra": "mean: 502.7344941999322 nsec\nrounds: 158731"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 142928.25085604808,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021427114516120008",
            "extra": "mean: 6.996517441517997 usec\nrounds: 172"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 582427.5585903192,
            "unit": "iter/sec",
            "range": "stddev: 1.4611787197465577e-7",
            "extra": "mean: 1.7169517225804936 usec\nrounds: 81301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7",
          "message": "datadog-exporter: bugfix for unintentional type change (#261)",
          "timestamp": "2021-01-05T09:58:47-08:00",
          "tree_id": "96df3088c43358e88fbb30f54b7f94f4f87eb9c7",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7"
        },
        "date": 1609869574584,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1231729.1397690778,
            "unit": "iter/sec",
            "range": "stddev: 1.2408562065619403e-7",
            "extra": "mean: 811.8668039204448 nsec\nrounds: 68966"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1660050.2119268356,
            "unit": "iter/sec",
            "range": "stddev: 1.7802390420990782e-7",
            "extra": "mean: 602.3914173290523 nsec\nrounds: 163935"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 129971.40629739722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025685178221304707",
            "extra": "mean: 7.693999999598572 usec\nrounds: 166"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 525808.9934586365,
            "unit": "iter/sec",
            "range": "stddev: 2.562582881482643e-7",
            "extra": "mean: 1.9018312969929574 usec\nrounds: 71943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "681004+thomasdesr@users.noreply.github.com",
            "name": "Thomas Desrosiers",
            "username": "thomasdesr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21a5c164fa9539d7c39e21ffa47d9b13f8971a3b",
          "message": "Adds back retry_attempts to botocore (#275)",
          "timestamp": "2021-01-05T17:27:18-08:00",
          "tree_id": "5f82d209437b74e3e1b0e70c22d91697b8b52682",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/21a5c164fa9539d7c39e21ffa47d9b13f8971a3b"
        },
        "date": 1609896487145,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1278079.6704532327,
            "unit": "iter/sec",
            "range": "stddev: 0.000001424569156147225",
            "extra": "mean: 782.4238371973946 nsec\nrounds: 32680"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1709780.852927232,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012283343720156635",
            "extra": "mean: 584.8702763795424 nsec\nrounds: 178572"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 82594.50973461063,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075279570701098975",
            "extra": "mean: 12.107342282352178 usec\nrounds: 149"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 461772.9784427371,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036866913772245554",
            "extra": "mean: 2.165566299206931 usec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8abed0718471cb21462c5699a983be31d6c24c00",
          "message": "fix docker-tests build (#282)",
          "timestamp": "2021-01-06T20:39:12-08:00",
          "tree_id": "cab2e78c9d40fd9b100cc8b9f1351507bdd88767",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8abed0718471cb21462c5699a983be31d6c24c00"
        },
        "date": 1609994416477,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1217749.5630973212,
            "unit": "iter/sec",
            "range": "stddev: 1.5512323935879701e-7",
            "extra": "mean: 821.1869092824968 nsec\nrounds: 56498"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1723208.164886829,
            "unit": "iter/sec",
            "range": "stddev: 1.1565312573645683e-7",
            "extra": "mean: 580.3129420905888 nsec\nrounds: 136987"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 126871.63318526324,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024101823049658463",
            "extra": "mean: 7.881982559015051 usec\nrounds: 172"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 517543.0861743583,
            "unit": "iter/sec",
            "range": "stddev: 2.023371382215788e-7",
            "extra": "mean: 1.932206277533198 usec\nrounds: 65790"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ThePumpingLemma@users.noreply.github.com",
            "name": "Dave Grochowski",
            "username": "ThePumpingLemma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb01a6bcb796fc2f9173775496d0eff3a820e08d",
          "message": "Use instanceof to check if responses are valid Response objects (#273)",
          "timestamp": "2021-01-07T18:24:19-08:00",
          "tree_id": "15354b7a8bf9b5fd800ee52ad7e564cbb694ddc8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cb01a6bcb796fc2f9173775496d0eff3a820e08d"
        },
        "date": 1610072718277,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1165435.1222158498,
            "unit": "iter/sec",
            "range": "stddev: 0.000001100640482742488",
            "extra": "mean: 858.0486214442321 nsec\nrounds: 66226"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1625583.3677119631,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016079391227169807",
            "extra": "mean: 615.1637743486003 nsec\nrounds: 172414"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 99690.76934304362,
            "unit": "iter/sec",
            "range": "stddev: 0.000002679691704152335",
            "extra": "mean: 10.031018985909547 usec\nrounds: 158"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 472150.85519187443,
            "unit": "iter/sec",
            "range": "stddev: 0.000002243536486737069",
            "extra": "mean: 2.1179671475838298 usec\nrounds: 72993"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57b8106edc58e16aa52eced9289418b7c0850704",
          "message": "Fix AttributeError: __aexit__ for aiopg.connect and aiopg.create_pool (#235)",
          "timestamp": "2021-01-08T08:56:38-08:00",
          "tree_id": "5ebc92d214b376906a57445efd1749bead9ef8ca",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/57b8106edc58e16aa52eced9289418b7c0850704"
        },
        "date": 1610125051653,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1169523.2742242713,
            "unit": "iter/sec",
            "range": "stddev: 0.000001373301413478405",
            "extra": "mean: 855.0492512971033 nsec\nrounds: 70922"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1559399.136507394,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017769903307637831",
            "extra": "mean: 641.2726393062604 nsec\nrounds: 181819"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 94267.94343185799,
            "unit": "iter/sec",
            "range": "stddev: 0.00003357564388288522",
            "extra": "mean: 10.608059999981378 usec\nrounds: 150"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 472701.3405444438,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025240510423692417",
            "extra": "mean: 2.115500664432702 usec\nrounds: 72993"
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
          "id": "d12f67fc31f0376440b21083f328834693ac7ee2",
          "message": "Fix ids_generator references from moving from api to sdk (#283)",
          "timestamp": "2021-01-11T12:40:38-08:00",
          "tree_id": "822aedb5e81f23fbeb4353fa99e9195203be2326",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/d12f67fc31f0376440b21083f328834693ac7ee2"
        },
        "date": 1610397700240,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1237572.0620654689,
            "unit": "iter/sec",
            "range": "stddev: 3.158623834392027e-7",
            "extra": "mean: 808.0337546817528 nsec\nrounds: 72464"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1750512.1253786366,
            "unit": "iter/sec",
            "range": "stddev: 2.52891403334315e-7",
            "extra": "mean: 571.2613957379469 nsec\nrounds: 175439"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 128185.3077824399,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028760153673881253",
            "extra": "mean: 7.801206060972536 usec\nrounds: 165"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 520939.3254127512,
            "unit": "iter/sec",
            "range": "stddev: 5.670816739919762e-7",
            "extra": "mean: 1.9196093502975209 usec\nrounds: 63292"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c8f2785bdbc707bfe3edd969c4f021d2ea20dce",
          "message": "SQLAlchemy: Use SQL operation and DB name as the Span name (#254)\n\nCurrent instrumentation uses the entire SQL query as the operation name\r\nwhich makes traces very hard to read and understand in addition to\r\nintroducing high-cardinality issues. This commit fixes the problem by\r\nusing only the SQL operation name and the DB name instead of the entire\r\nquery.",
          "timestamp": "2021-01-20T08:41:19-08:00",
          "tree_id": "3ee47e3717a0ef9c585b079fa12f7e4daddb9d22",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8c8f2785bdbc707bfe3edd969c4f021d2ea20dce"
        },
        "date": 1611160950429,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1225587.5317514264,
            "unit": "iter/sec",
            "range": "stddev: 2.7079024147490737e-7",
            "extra": "mean: 815.9351936054289 nsec\nrounds: 12005"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1700666.6437629054,
            "unit": "iter/sec",
            "range": "stddev: 1.8325135730696607e-7",
            "extra": "mean: 588.0047119565971 nsec\nrounds: 105264"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 129648.00567426557,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030875153399897287",
            "extra": "mean: 7.7131923071184945 usec\nrounds: 182"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 497547.1561215665,
            "unit": "iter/sec",
            "range": "stddev: 3.093562231715485e-7",
            "extra": "mean: 2.0098597443408326 usec\nrounds: 49752"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b9202be6f6d073f6510e37f2783c4895d344bab",
          "message": "Updated dbapi and psycopg2 instrumentations. (#246)\n\nChanges:\r\n\r\n- Update dbapi instrumentation to use the SQL statement name as the span\r\ninstead of the entire SQL query.\r\n- Renamed TracedCursor with CursorTracing. The class was not a valid\r\nCursor so the name was confusing.\r\n- Updated CursorTracing's (previously TracedCursor) traced_execution\r\nmethod to accept the cursor instance as the first argument. This is\r\nrequired as for some dbapi implementations, we need a reference to the\r\ncursor in order to correctly format the SQL query.\r\n- Updated psycopg2 instrumentation to leverage dbapi's `cursor_factory`\r\nmechanism instead of wrapping the cursor with wrapt. This results in a\r\nsimpler instrumentation without monkey patching objects at runtime and\r\nallows psycopg2's type registration system to work. This should make it\r\npossible to use psycopg2 instrumentation when using the JSONB feature or\r\nwith frameworks like Django.",
          "timestamp": "2021-01-20T10:45:28-08:00",
          "tree_id": "e93205f89443f5f5eb3513e7e53cbf66d1976ae1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8b9202be6f6d073f6510e37f2783c4895d344bab"
        },
        "date": 1611168398416,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1241530.0595211654,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014438942252560485",
            "extra": "mean: 805.4577433152775 nsec\nrounds: 98040"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2488619.647781583,
            "unit": "iter/sec",
            "range": "stddev: 3.420866792987374e-7",
            "extra": "mean: 401.8291830539814 nsec\nrounds: 136987"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 105843.83206123255,
            "unit": "iter/sec",
            "range": "stddev: 0.000003375657227230234",
            "extra": "mean: 9.447881662310584 usec\nrounds: 169"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 487846.4933057827,
            "unit": "iter/sec",
            "range": "stddev: 0.000003846328242800882",
            "extra": "mean: 2.0498251268011045 usec\nrounds: 69931"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3aa7a79d30713215af7a90a1c941367b0f95647",
          "message": "Update TraceState (#276)",
          "timestamp": "2021-01-20T12:13:12-08:00",
          "tree_id": "f9050e0bef079ec058c7d01624c6aad0187cd5a8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b3aa7a79d30713215af7a90a1c941367b0f95647"
        },
        "date": 1611173640925,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1491930.8257443395,
            "unit": "iter/sec",
            "range": "stddev: 3.5827802449089846e-7",
            "extra": "mean: 670.272362997185 nsec\nrounds: 62894"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2170805.9806989064,
            "unit": "iter/sec",
            "range": "stddev: 3.107614277945031e-7",
            "extra": "mean: 460.65839549513447 nsec\nrounds: 178572"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 137760.86759660539,
            "unit": "iter/sec",
            "range": "stddev: 0.00000265486890401022",
            "extra": "mean: 7.2589554453752685 usec\nrounds: 202"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 598074.071782949,
            "unit": "iter/sec",
            "range": "stddev: 5.598352180157674e-7",
            "extra": "mean: 1.672033694787753 usec\nrounds: 86957"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#287)",
          "timestamp": "2021-01-20T16:01:24-08:00",
          "tree_id": "0961312fff1a59e4fa73e69a0165a61ba9bb911b",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58"
        },
        "date": 1611187333271,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1380119.6603088323,
            "unit": "iter/sec",
            "range": "stddev: 4.713279095602943e-7",
            "extra": "mean: 724.5748530067515 nsec\nrounds: 70418"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1937106.8272591669,
            "unit": "iter/sec",
            "range": "stddev: 4.007159588119279e-7",
            "extra": "mean: 516.2337904796458 nsec\nrounds: 151516"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 183736.3792508117,
            "unit": "iter/sec",
            "range": "stddev: 0.000002966822526172336",
            "extra": "mean: 5.442580310320239 usec\nrounds: 193"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 598665.1185273167,
            "unit": "iter/sec",
            "range": "stddev: 6.93041112145409e-7",
            "extra": "mean: 1.6703829387286584 usec\nrounds: 86207"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08e82a92d7bdff2074fb19a853d99063e5058b02",
          "message": "[post-release] updating version to 0.18.dev0 (#289)",
          "timestamp": "2021-01-21T09:10:30-08:00",
          "tree_id": "049cd0c1735a140711868158e4ccd46e9ffc60f0",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/08e82a92d7bdff2074fb19a853d99063e5058b02"
        },
        "date": 1611249088220,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1230371.6575598298,
            "unit": "iter/sec",
            "range": "stddev: 6.225141548507171e-7",
            "extra": "mean: 812.7625452485463 nsec\nrounds: 57472"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2487361.2318625147,
            "unit": "iter/sec",
            "range": "stddev: 2.2666719087364019e-7",
            "extra": "mean: 402.0324781096984 nsec\nrounds: 123457"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 104467.66069858482,
            "unit": "iter/sec",
            "range": "stddev: 0.000007235411344137463",
            "extra": "mean: 9.572340313862762 usec\nrounds: 191"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 498999.81703969766,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011150853868590613",
            "extra": "mean: 2.004008750809713 usec\nrounds: 76336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3a078296c098d861a2e70795404a1e5938d44cc",
          "message": "Added Zoom passcode (#295)",
          "timestamp": "2021-01-26T08:15:47-08:00",
          "tree_id": "ba9b86df7270b95a084ae310f92e9b726eeb0634",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f3a078296c098d861a2e70795404a1e5938d44cc"
        },
        "date": 1611677814274,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1241539.448145702,
            "unit": "iter/sec",
            "range": "stddev: 2.551091984943351e-7",
            "extra": "mean: 805.4516523768515 nsec\nrounds: 69445"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1679355.5720765153,
            "unit": "iter/sec",
            "range": "stddev: 6.502212496188296e-7",
            "extra": "mean: 595.4665090749689 nsec\nrounds: 129871"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 115659.85477462127,
            "unit": "iter/sec",
            "range": "stddev: 0.000007555568941716384",
            "extra": "mean: 8.646042327725848 usec\nrounds: 189"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 522012.5635124751,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024194049748579462",
            "extra": "mean: 1.9156627060300664 usec\nrounds: 76924"
          }
        ]
      },
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
          "id": "c9075cf1f22341b3d6e8c298de93cbb344450aca",
          "message": "Add readTheDocs (#252)\n\nCo-authored-by: Aaron Abbott <aaronabbott@google.com>\r\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-26T09:06:39-08:00",
          "tree_id": "8b86f1c8f9aba2a680890ffa3666177f0aee73ba",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/c9075cf1f22341b3d6e8c298de93cbb344450aca"
        },
        "date": 1611680965888,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1246419.6378827447,
            "unit": "iter/sec",
            "range": "stddev: 3.469240992760028e-7",
            "extra": "mean: 802.298013932667 nsec\nrounds: 56494"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1774620.7290603893,
            "unit": "iter/sec",
            "range": "stddev: 3.23887155840528e-7",
            "extra": "mean: 563.5006870056518 nsec\nrounds: 166667"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 122351.53899551088,
            "unit": "iter/sec",
            "range": "stddev: 0.000003724851984770478",
            "extra": "mean: 8.173170588697623 usec\nrounds: 170"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 528081.9022719052,
            "unit": "iter/sec",
            "range": "stddev: 6.748540621933855e-7",
            "extra": "mean: 1.8936456555277061 usec\nrounds: 70423"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f279d396231ceb9e08429443234db6e9d4d6d437",
          "message": "updating readme (#296)\n\nAdding more details to the readme including a link to the read the docs",
          "timestamp": "2021-01-26T09:35:37-08:00",
          "tree_id": "18d08ec0e004137fd205213222edf4160c7bce83",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f279d396231ceb9e08429443234db6e9d4d6d437"
        },
        "date": 1611682580089,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1439706.7004679807,
            "unit": "iter/sec",
            "range": "stddev: 3.17630848082351e-7",
            "extra": "mean: 694.585917864345 nsec\nrounds: 85471"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1971486.5949742494,
            "unit": "iter/sec",
            "range": "stddev: 2.757268212849506e-7",
            "extra": "mean: 507.2314478572761 nsec\nrounds: 181786"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 141583.25291666933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020910797761810246",
            "extra": "mean: 7.062982234124561 usec\nrounds: 169"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 593689.0750167457,
            "unit": "iter/sec",
            "range": "stddev: 4.7035315612249186e-7",
            "extra": "mean: 1.6843833617315491 usec\nrounds: 68961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc260c748d468a3f2f5c9657c23aee848e6e7eb",
          "message": "update python version for readthedocs (#297)",
          "timestamp": "2021-01-26T09:51:37-08:00",
          "tree_id": "bf7cd69d2f07891fde7b65f79a8275e1aec57236",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/fcc260c748d468a3f2f5c9657c23aee848e6e7eb"
        },
        "date": 1611683540663,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1082716.6476184404,
            "unit": "iter/sec",
            "range": "stddev: 0.000012306012250193092",
            "extra": "mean: 923.6026823819647 nsec\nrounds: 71429"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2409498.950341107,
            "unit": "iter/sec",
            "range": "stddev: 7.769669176095022e-7",
            "extra": "mean: 415.0240446702994 nsec\nrounds: 120482"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 107703.82508229068,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026270989358567606",
            "extra": "mean: 9.284721310835096 usec\nrounds: 183"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 473680.83254276164,
            "unit": "iter/sec",
            "range": "stddev: 0.000004212118691071894",
            "extra": "mean: 2.1111261661822147 usec\nrounds: 70423"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "theegrandmaster@gmail.com",
            "name": "M.J",
            "username": "theelous3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c",
          "message": "Aiohttp instrumentation readme (#286)",
          "timestamp": "2021-01-28T09:12:31-08:00",
          "tree_id": "84870866cf1256c3930a9b9f445c1dfe00efadd8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c"
        },
        "date": 1611854011770,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1212634.6136515327,
            "unit": "iter/sec",
            "range": "stddev: 0.00000791761959954151",
            "extra": "mean: 824.6507140256874 nsec\nrounds: 98040"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1611219.1202678669,
            "unit": "iter/sec",
            "range": "stddev: 6.983725515658987e-7",
            "extra": "mean: 620.6480468241643 nsec\nrounds: 105264"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 125187.87123847214,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023934123875398213",
            "extra": "mean: 7.987994284966199 usec\nrounds: 175"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 483260.9996785122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015266065896579373",
            "extra": "mean: 2.069275196354034 usec\nrounds: 71429"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f022385e37d14f5baadda2292a1115ef244b7523",
          "message": "update references to main (#306)",
          "timestamp": "2021-01-29T12:09:22-08:00",
          "tree_id": "b5abf4db59338681d5cfa6418f374bbb6cc38789",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f022385e37d14f5baadda2292a1115ef244b7523"
        },
        "date": 1611951092494,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1455753.0496462425,
            "unit": "iter/sec",
            "range": "stddev: 1.3213477408777536e-7",
            "extra": "mean: 686.929696106772 nsec\nrounds: 96154"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2118519.2383400784,
            "unit": "iter/sec",
            "range": "stddev: 9.721577618388275e-8",
            "extra": "mean: 472.0278116442922 nsec\nrounds: 149254"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 140205.85136771962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025803131324363154",
            "extra": "mean: 7.1323699420881335 usec\nrounds: 173"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 572854.6230275879,
            "unit": "iter/sec",
            "range": "stddev: 1.7268473985294655e-7",
            "extra": "mean: 1.7456435887955493 usec\nrounds: 75758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0adb23143e56dffc3face697b17349dd3281f56",
          "message": "Remove 'component' span attribute in instrumentations (#301)",
          "timestamp": "2021-01-29T13:15:26-08:00",
          "tree_id": "4661d9ccf175efe020f4f9afe15b86d61eb89b14",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f0adb23143e56dffc3face697b17349dd3281f56"
        },
        "date": 1611954976452,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1265712.4220624084,
            "unit": "iter/sec",
            "range": "stddev: 2.2712167081874915e-7",
            "extra": "mean: 790.0688833965581 nsec\nrounds: 68028"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1775848.3928538598,
            "unit": "iter/sec",
            "range": "stddev: 2.0398796929650235e-7",
            "extra": "mean: 563.1111326980789 nsec\nrounds: 149254"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 122746.4845245925,
            "unit": "iter/sec",
            "range": "stddev: 0.000002571156102214522",
            "extra": "mean: 8.146872832025165 usec\nrounds: 173"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 490738.5297856538,
            "unit": "iter/sec",
            "range": "stddev: 1.935350137780719e-7",
            "extra": "mean: 2.0377450297957713 usec\nrounds: 68961"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fd68a2bf9b91f00bd30f47b4aac84e0052af034",
          "message": "Remove Configuration from instrumentations (#285)",
          "timestamp": "2021-02-04T08:02:37-08:00",
          "tree_id": "bdd0d76071a8dc726d87e3d7837280caa60fab24",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2fd68a2bf9b91f00bd30f47b4aac84e0052af034"
        },
        "date": 1612454608563,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1160830.8755458866,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030387289958321773",
            "extra": "mean: 861.4519316000662 nsec\nrounds: 86949"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1426816.8669950336,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015259741623681076",
            "extra": "mean: 700.8607923917126 nsec\nrounds: 181786"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 130699.50217091155,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025104636492079564",
            "extra": "mean: 7.651138553629163 usec\nrounds: 166"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 511489.48495684034,
            "unit": "iter/sec",
            "range": "stddev: 0.000010599066784281084",
            "extra": "mean: 1.9550744040894221 usec\nrounds: 66663"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b016f6f774225065dc5fc3e5df0f7858827a07ea",
          "message": "update requirements for snappy (#314)",
          "timestamp": "2021-02-04T15:10:10-08:00",
          "tree_id": "8e066a24cd6aa230b9dc9dfc6bf9a1dc7f37b483",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b016f6f774225065dc5fc3e5df0f7858827a07ea"
        },
        "date": 1612480256252,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1587630.7917872502,
            "unit": "iter/sec",
            "range": "stddev: 7.702088540333338e-7",
            "extra": "mean: 629.8693658330134 nsec\nrounds: 96154"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2558684.4218531717,
            "unit": "iter/sec",
            "range": "stddev: 6.140470605282957e-7",
            "extra": "mean: 390.82584450792035 nsec\nrounds: 153847"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 139430.19964243012,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012947956955451252",
            "extra": "mean: 7.17204739406892 usec\nrounds: 211"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 632038.7898366945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014509257027632212",
            "extra": "mean: 1.5821813725362948 usec\nrounds: 77520"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53b9a012f76c4fc883c3c245fddc29142706d0d",
          "message": "Fix failing aiopg tests (#317)",
          "timestamp": "2021-02-04T17:39:24-08:00",
          "tree_id": "6e0ed7b51c1d7108b87c3ec62a8ff3ae6a154fe8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b53b9a012f76c4fc883c3c245fddc29142706d0d"
        },
        "date": 1612489206951,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1297008.5765820653,
            "unit": "iter/sec",
            "range": "stddev: 6.744861011225101e-7",
            "extra": "mean: 771.0049247594372 nsec\nrounds: 69445"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1730814.1454070518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012508610683404488",
            "extra": "mean: 577.7627844408568 nsec\nrounds: 185186"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 129244.29017683207,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025527614670733874",
            "extra": "mean: 7.737285713990148 usec\nrounds: 161"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 517175.7113375384,
            "unit": "iter/sec",
            "range": "stddev: 0.000001780250787311808",
            "extra": "mean: 1.9335788167889094 usec\nrounds: 75758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31176812+garnertan@users.noreply.github.com",
            "name": "Garner Jervis Tan",
            "username": "garnertan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55efeb6063e2704b70c46290e005cb2278f3dbd4",
          "message": "Case insensitive header key retrieval for asgi instrumentation (#308)",
          "timestamp": "2021-02-05T08:51:06-08:00",
          "tree_id": "1d412776f2f4d7bea57e1f80bafa6b4317361bb4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/55efeb6063e2704b70c46290e005cb2278f3dbd4"
        },
        "date": 1612543908668,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1199800.4665195441,
            "unit": "iter/sec",
            "range": "stddev: 0.000004536145574150091",
            "extra": "mean: 833.4719212944319 nsec\nrounds: 57143"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1887058.4590412288,
            "unit": "iter/sec",
            "range": "stddev: 8.911353226793184e-7",
            "extra": "mean: 529.9252893883795 nsec\nrounds: 116280"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 99437.1018209526,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034327638723030313",
            "extra": "mean: 10.05660846592864 usec\nrounds: 189"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 479708.7154638434,
            "unit": "iter/sec",
            "range": "stddev: 0.000002072134949288295",
            "extra": "mean: 2.0845983568029878 usec\nrounds: 76924"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ade29f692bb7d0ab23aad638f9503bf6dbaec507",
          "message": "gRPC instrumentation: client additions (#269)\n\nThe docs on metric labels suggests that they should probably be strings,\r\nand all others I can find are strings, and so these ought to be also.\r\nOtherwise, some of the exporters/processors have to handle things\r\nspecifically, and not all of these come out as nice as could be when you\r\n`str()` them.\r\n\r\nI've also made sure to use the `StatusCode` name, as that's the\r\ninteresting thing.\r\n\r\nFinally, there's no need to report specifically that `error=false`, so\r\nI've removed that tag.",
          "timestamp": "2021-02-05T09:09:57-08:00",
          "tree_id": "0ba0a2485e59a499caa935b144abe3b86fa2ac9c",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/ade29f692bb7d0ab23aad638f9503bf6dbaec507"
        },
        "date": 1612545035811,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1275117.3809175182,
            "unit": "iter/sec",
            "range": "stddev: 4.107916601354423e-7",
            "extra": "mean: 784.2415254981814 nsec\nrounds: 74075"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1844658.0418927665,
            "unit": "iter/sec",
            "range": "stddev: 2.909948162340385e-7",
            "extra": "mean: 542.10589566721 nsec\nrounds: 178572"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 128936.77173844293,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028029924857134214",
            "extra": "mean: 7.755739394721069 usec\nrounds: 165"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 545184.8485127047,
            "unit": "iter/sec",
            "range": "stddev: 5.849837005452826e-7",
            "extra": "mean: 1.8342402631475487 usec\nrounds: 76924"
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
      },
      {
        "commit": {
          "author": {
            "email": "moaddib666@gmail.com",
            "name": "Max Nikitenko",
            "username": "moaddib666"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "187987d9ccc359ca2b1e72cfafd10d184c3ab655",
          "message": "Feature/urllib instrumentation (#222)",
          "timestamp": "2020-12-15T10:11:33-08:00",
          "tree_id": "0b35fa021a647e4c9db902738c9ab8f2cbaa2d59",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/187987d9ccc359ca2b1e72cfafd10d184c3ab655"
        },
        "date": 1608055955756,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1279077.666144274,
            "unit": "iter/sec",
            "range": "stddev: 1.9100164908968202e-7",
            "extra": "mean: 781.8133538477441 nsec\nrounds: 49259"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1578676.813629132,
            "unit": "iter/sec",
            "range": "stddev: 1.9201947627651436e-7",
            "extra": "mean: 633.4418744652085 nsec\nrounds: 84739"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 77908.38890687696,
            "unit": "iter/sec",
            "range": "stddev: 0.000014552363802666258",
            "extra": "mean: 12.835588234218127 usec\nrounds: 17"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 498031.8169000268,
            "unit": "iter/sec",
            "range": "stddev: 3.5731914597399487e-7",
            "extra": "mean: 2.0079038448275215 usec\nrounds: 43669"
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
          "id": "65801c31d8eba6c3625c29d610b67a97ed547a31",
          "message": "Fix requests and urllib instrumentations span name callback parameters (#259)",
          "timestamp": "2020-12-16T08:17:23-08:00",
          "tree_id": "595b2219804af9c1545baf22673099f5ac2b41e4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/65801c31d8eba6c3625c29d610b67a97ed547a31"
        },
        "date": 1608135491397,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1299641.6073785936,
            "unit": "iter/sec",
            "range": "stddev: 4.6600878636908674e-7",
            "extra": "mean: 769.4428943507146 nsec\nrounds: 64512"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1602716.4066391515,
            "unit": "iter/sec",
            "range": "stddev: 4.042524819754236e-7",
            "extra": "mean: 623.9407020840139 nsec\nrounds: 163935"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 118997.02507251306,
            "unit": "iter/sec",
            "range": "stddev: 0.000003113919612622613",
            "extra": "mean: 8.403571428702787 usec\nrounds: 133"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 510097.6592780981,
            "unit": "iter/sec",
            "range": "stddev: 7.882962814336523e-7",
            "extra": "mean: 1.9604089174124477 usec\nrounds: 90901"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "azfaarq@amazon.com",
            "name": "Azfaar Qureshi",
            "username": "AzfaarQureshi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6f5b90aeb181bf24a4c64f34e74012b5b246e51",
          "message": "Prometheus Remote Write Exporter (6/6) (#227)\n\n* adding README\r\n\r\nadding sample app\r\n\r\nadding examples readme\r\n\r\nfixing lint errors\r\n\r\nlinting examples\r\n\r\nupdating readme tls_config example\r\n\r\nexcluding examples\r\n\r\nadding examples to exclude in all linters\r\n\r\nadding isort.cfg skip\r\n\r\nchanging isort to path\r\n\r\nignoring yml only\r\n\r\nadding it to excluded directories in pylintrc\r\n\r\nonly adding exclude to directory\r\n\r\nremoving readme.rst and adding explicit file names to ignore\r\n\r\nadding the rest of the files\r\n\r\nadding readme.rst back\r\n\r\nadding to ignore glob instead\r\n\r\nreverting back to ignore list\r\n\r\nconverting README.md to README.rst\r\n\r\n* addressing readme comments\r\n\r\n* adding link to spec for details on aggregators\r\n\r\n* updating readme\r\n\r\n* adding python-snappy to setup.cfg",
          "timestamp": "2020-12-22T11:06:22-08:00",
          "tree_id": "4478cadeaead5e63e0e180f5d1fe3a78d0046e1d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f6f5b90aeb181bf24a4c64f34e74012b5b246e51"
        },
        "date": 1608664041192,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1126618.0310439297,
            "unit": "iter/sec",
            "range": "stddev: 4.026979923935346e-7",
            "extra": "mean: 887.6122806887754 nsec\nrounds: 98040"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1461059.5164462335,
            "unit": "iter/sec",
            "range": "stddev: 3.165464823269252e-7",
            "extra": "mean: 684.434815107547 nsec\nrounds: 153847"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 118918.66179717296,
            "unit": "iter/sec",
            "range": "stddev: 0.00000440522424911491",
            "extra": "mean: 8.409109090931368 usec\nrounds: 55"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 461510.18905376265,
            "unit": "iter/sec",
            "range": "stddev: 6.309605821341232e-7",
            "extra": "mean: 2.166799398406147 usec\nrounds: 78125"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adamantike@users.noreply.github.com",
            "name": "Michael Manganiello",
            "username": "adamantike"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9ea61cfd8a991adec22325f28357f9ff02ef32f",
          "message": "Celery: Add support for new major version 5.x (#266)",
          "timestamp": "2020-12-22T15:48:23-08:00",
          "tree_id": "d2f04b14c3bbff2f7f897e71e3501154087dbaa8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f9ea61cfd8a991adec22325f28357f9ff02ef32f"
        },
        "date": 1608680954994,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1223306.0006770254,
            "unit": "iter/sec",
            "range": "stddev: 4.898316398293407e-7",
            "extra": "mean: 817.4569563515267 nsec\nrounds: 78734"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1686139.6168209652,
            "unit": "iter/sec",
            "range": "stddev: 4.330156202760757e-7",
            "extra": "mean: 593.0706983122741 nsec\nrounds: 161291"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 107939.73877004038,
            "unit": "iter/sec",
            "range": "stddev: 0.000004734476203757647",
            "extra": "mean: 9.264428572783972 usec\nrounds: 42"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 534729.7625031067,
            "unit": "iter/sec",
            "range": "stddev: 7.633888523186371e-7",
            "extra": "mean: 1.87010349923096 usec\nrounds: 25063"
          }
        ]
      },
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
          "id": "cfaa2b7fff6121d52fc2deb74a9558d75cb1197f",
          "message": "Set max number of commits in performance graph (#270)",
          "timestamp": "2020-12-22T16:32:58-08:00",
          "tree_id": "24384fa664e8f32dfa4e748ae5f0febbdee064a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cfaa2b7fff6121d52fc2deb74a9558d75cb1197f"
        },
        "date": 1608683628028,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1022189.1984502899,
            "unit": "iter/sec",
            "range": "stddev: 7.854284333467351e-7",
            "extra": "mean: 978.2924741486897 nsec\nrounds: 50001"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1356492.164120366,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010168133223585575",
            "extra": "mean: 737.195559583982 nsec\nrounds: 161291"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 82936.44787744971,
            "unit": "iter/sec",
            "range": "stddev: 0.00000817711518568303",
            "extra": "mean: 12.057424999412092 usec\nrounds: 40"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 428261.0409442151,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024320675590106626",
            "extra": "mean: 2.335024446293865 usec\nrounds: 75758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df79be6ea935073ba94c80f19ecd4360565ef36b",
          "message": "Add CodeQL analysis (#277)",
          "timestamp": "2020-12-31T12:52:03-08:00",
          "tree_id": "2465c1d4e58cc81e70324a35aba97ba2225a6fbd",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/df79be6ea935073ba94c80f19ecd4360565ef36b"
        },
        "date": 1609447965226,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1502518.9340584266,
            "unit": "iter/sec",
            "range": "stddev: 3.222412813644768e-7",
            "extra": "mean: 665.549017275222 nsec\nrounds: 67568"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1909401.9988711907,
            "unit": "iter/sec",
            "range": "stddev: 6.466732963528945e-7",
            "extra": "mean: 523.72418201677 nsec\nrounds: 192308"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 122001.24098066975,
            "unit": "iter/sec",
            "range": "stddev: 0.000004038441052498395",
            "extra": "mean: 8.196637935498075 usec\nrounds: 58"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 499245.6439643564,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027586400184213733",
            "extra": "mean: 2.003021983445478 usec\nrounds: 78741"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "472f84538144c1a8cc7260ae67c5dad17abb32bb",
          "message": "Upgrade isort and enable black compat mode (#248)",
          "timestamp": "2021-01-05T07:23:53-08:00",
          "tree_id": "af865a041531f974faba5248eccc4d7c7b4da4a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/472f84538144c1a8cc7260ae67c5dad17abb32bb"
        },
        "date": 1609860297580,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1217355.322162161,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013015198892692457",
            "extra": "mean: 821.4528509423909 nsec\nrounds: 34603"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2180413.586404402,
            "unit": "iter/sec",
            "range": "stddev: 3.0661504202003417e-7",
            "extra": "mean: 458.62858598726865 nsec\nrounds: 126583"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 106312.80609399204,
            "unit": "iter/sec",
            "range": "stddev: 0.000005487112686578254",
            "extra": "mean: 9.406204546194479 usec\nrounds: 132"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 477096.70513045904,
            "unit": "iter/sec",
            "range": "stddev: 0.000007155212787119734",
            "extra": "mean: 2.0960111215325967 usec\nrounds: 89286"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fea7f7a2709b0c846934bafb27f3c1c1e415eea",
          "message": "Ensure SQLAlchemy spans have kind set to CLIENT (#278)\n\nSQLAlchemy spans were missing kind field and it was being set to\r\ninternal instead of client. This commit changes sqlalchemy spans to have\r\nkind set to \"client\" instead.",
          "timestamp": "2021-01-05T09:05:58-08:00",
          "tree_id": "52b5dfa2eb3a72e0a8e28d1b94bfa4ad3b7a485f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/9fea7f7a2709b0c846934bafb27f3c1c1e415eea"
        },
        "date": 1609866412444,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1304788.9588724256,
            "unit": "iter/sec",
            "range": "stddev: 1.2678420730509305e-7",
            "extra": "mean: 766.4074662803565 nsec\nrounds: 70423"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1642204.767043767,
            "unit": "iter/sec",
            "range": "stddev: 1.7932572385418506e-7",
            "extra": "mean: 608.9374602170722 nsec\nrounds: 169492"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 96205.23783810316,
            "unit": "iter/sec",
            "range": "stddev: 0.000006994567053262554",
            "extra": "mean: 10.394444444727924 usec\nrounds: 36"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 511286.39847791684,
            "unit": "iter/sec",
            "range": "stddev: 2.194418383640934e-7",
            "extra": "mean: 1.95585097310816 usec\nrounds: 68028"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7",
          "message": "datadog-exporter: bugfix for unintentional type change (#261)",
          "timestamp": "2021-01-05T09:58:47-08:00",
          "tree_id": "96df3088c43358e88fbb30f54b7f94f4f87eb9c7",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7"
        },
        "date": 1609869571032,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1309908.94651187,
            "unit": "iter/sec",
            "range": "stddev: 1.232011945805824e-7",
            "extra": "mean: 763.4118406954008 nsec\nrounds: 65790"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1687783.0678905793,
            "unit": "iter/sec",
            "range": "stddev: 5.349202336579326e-7",
            "extra": "mean: 592.4932054507558 nsec\nrounds: 158731"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 121400.33879519188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048382908864200674",
            "extra": "mean: 8.237209302084795 usec\nrounds: 43"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 511721.15625780757,
            "unit": "iter/sec",
            "range": "stddev: 2.3270365551146444e-7",
            "extra": "mean: 1.9541892840877488 usec\nrounds: 65790"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "681004+thomasdesr@users.noreply.github.com",
            "name": "Thomas Desrosiers",
            "username": "thomasdesr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21a5c164fa9539d7c39e21ffa47d9b13f8971a3b",
          "message": "Adds back retry_attempts to botocore (#275)",
          "timestamp": "2021-01-05T17:27:18-08:00",
          "tree_id": "5f82d209437b74e3e1b0e70c22d91697b8b52682",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/21a5c164fa9539d7c39e21ffa47d9b13f8971a3b"
        },
        "date": 1609896483961,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1067499.3043145626,
            "unit": "iter/sec",
            "range": "stddev: 1.558449904529658e-7",
            "extra": "mean: 936.7687603713207 nsec\nrounds: 66230"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1435883.1229147937,
            "unit": "iter/sec",
            "range": "stddev: 1.5065704484565863e-7",
            "extra": "mean: 696.4355134769146 nsec\nrounds: 185186"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 114323.93924492999,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029257116915654165",
            "extra": "mean: 8.74707438008744 usec\nrounds: 121"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 447070.19881232904,
            "unit": "iter/sec",
            "range": "stddev: 3.854586193792572e-7",
            "extra": "mean: 2.236785190908642 usec\nrounds: 77520"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8abed0718471cb21462c5699a983be31d6c24c00",
          "message": "fix docker-tests build (#282)",
          "timestamp": "2021-01-06T20:39:12-08:00",
          "tree_id": "cab2e78c9d40fd9b100cc8b9f1351507bdd88767",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8abed0718471cb21462c5699a983be31d6c24c00"
        },
        "date": 1609994419511,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1167462.7480674246,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026919461398854838",
            "extra": "mean: 856.558379832987 nsec\nrounds: 90091"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2120126.1140690497,
            "unit": "iter/sec",
            "range": "stddev: 5.234451462276976e-7",
            "extra": "mean: 471.6700546085033 nsec\nrounds: 116280"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 79277.69213600615,
            "unit": "iter/sec",
            "range": "stddev: 0.00001106046118263647",
            "extra": "mean: 12.613888889253152 usec\nrounds: 36"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 456360.1182617977,
            "unit": "iter/sec",
            "range": "stddev: 0.0000047154616082673055",
            "extra": "mean: 2.191251952096163 usec\nrounds: 86957"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ThePumpingLemma@users.noreply.github.com",
            "name": "Dave Grochowski",
            "username": "ThePumpingLemma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb01a6bcb796fc2f9173775496d0eff3a820e08d",
          "message": "Use instanceof to check if responses are valid Response objects (#273)",
          "timestamp": "2021-01-07T18:24:19-08:00",
          "tree_id": "15354b7a8bf9b5fd800ee52ad7e564cbb694ddc8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cb01a6bcb796fc2f9173775496d0eff3a820e08d"
        },
        "date": 1610072699534,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1276426.8092341598,
            "unit": "iter/sec",
            "range": "stddev: 9.723413349649894e-8",
            "extra": "mean: 783.437007720002 nsec\nrounds: 69445"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1615537.284507367,
            "unit": "iter/sec",
            "range": "stddev: 1.0796835798522229e-7",
            "extra": "mean: 618.9891187221559 nsec\nrounds: 144928"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 126583.5938152812,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028515517613600044",
            "extra": "mean: 7.8999179108413 usec\nrounds: 134"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 499537.7997805424,
            "unit": "iter/sec",
            "range": "stddev: 1.7245987007990128e-7",
            "extra": "mean: 2.0018505114914653 usec\nrounds: 90910"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57b8106edc58e16aa52eced9289418b7c0850704",
          "message": "Fix AttributeError: __aexit__ for aiopg.connect and aiopg.create_pool (#235)",
          "timestamp": "2021-01-08T08:56:38-08:00",
          "tree_id": "5ebc92d214b376906a57445efd1749bead9ef8ca",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/57b8106edc58e16aa52eced9289418b7c0850704"
        },
        "date": 1610125047481,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1048557.6645663092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017868184203630922",
            "extra": "mean: 953.6909926776482 nsec\nrounds: 47850"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1341631.4906841947,
            "unit": "iter/sec",
            "range": "stddev: 0.000002309729452345554",
            "extra": "mean: 745.3611568777563 nsec\nrounds: 196117"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 114114.57319145135,
            "unit": "iter/sec",
            "range": "stddev: 0.000003624949595897284",
            "extra": "mean: 8.763122640981958 usec\nrounds: 106"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 422891.5088287511,
            "unit": "iter/sec",
            "range": "stddev: 0.0000033966299078688673",
            "extra": "mean: 2.364672685837605 usec\nrounds: 65790"
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
          "id": "d12f67fc31f0376440b21083f328834693ac7ee2",
          "message": "Fix ids_generator references from moving from api to sdk (#283)",
          "timestamp": "2021-01-11T12:40:38-08:00",
          "tree_id": "822aedb5e81f23fbeb4353fa99e9195203be2326",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/d12f67fc31f0376440b21083f328834693ac7ee2"
        },
        "date": 1610397693396,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1264927.733817751,
            "unit": "iter/sec",
            "range": "stddev: 1.1719217189192771e-7",
            "extra": "mean: 790.5589965853958 nsec\nrounds: 85471"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1631065.2997331049,
            "unit": "iter/sec",
            "range": "stddev: 1.2616156735140129e-7",
            "extra": "mean: 613.0962384912685 nsec\nrounds: 175408"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 125274.58763072512,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032074362547196477",
            "extra": "mean: 7.982464910981976 usec\nrounds: 114"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 493270.8454614375,
            "unit": "iter/sec",
            "range": "stddev: 1.866601297703201e-7",
            "extra": "mean: 2.0272838121307073 usec\nrounds: 65790"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c8f2785bdbc707bfe3edd969c4f021d2ea20dce",
          "message": "SQLAlchemy: Use SQL operation and DB name as the Span name (#254)\n\nCurrent instrumentation uses the entire SQL query as the operation name\r\nwhich makes traces very hard to read and understand in addition to\r\nintroducing high-cardinality issues. This commit fixes the problem by\r\nusing only the SQL operation name and the DB name instead of the entire\r\nquery.",
          "timestamp": "2021-01-20T08:41:19-08:00",
          "tree_id": "3ee47e3717a0ef9c585b079fa12f7e4daddb9d22",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8c8f2785bdbc707bfe3edd969c4f021d2ea20dce"
        },
        "date": 1611160941355,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1195903.292084045,
            "unit": "iter/sec",
            "range": "stddev: 1.2359035192874213e-7",
            "extra": "mean: 836.1880150504031 nsec\nrounds: 74627"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1603599.9671618487,
            "unit": "iter/sec",
            "range": "stddev: 1.3704558003770486e-7",
            "extra": "mean: 623.5969197292155 nsec\nrounds: 175439"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 82855.61891116704,
            "unit": "iter/sec",
            "range": "stddev: 0.000010603937065941688",
            "extra": "mean: 12.069187499186285 usec\nrounds: 16"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 496125.73050812335,
            "unit": "iter/sec",
            "range": "stddev: 2.783527424620913e-7",
            "extra": "mean: 2.015618095388476 usec\nrounds: 67564"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b9202be6f6d073f6510e37f2783c4895d344bab",
          "message": "Updated dbapi and psycopg2 instrumentations. (#246)\n\nChanges:\r\n\r\n- Update dbapi instrumentation to use the SQL statement name as the span\r\ninstead of the entire SQL query.\r\n- Renamed TracedCursor with CursorTracing. The class was not a valid\r\nCursor so the name was confusing.\r\n- Updated CursorTracing's (previously TracedCursor) traced_execution\r\nmethod to accept the cursor instance as the first argument. This is\r\nrequired as for some dbapi implementations, we need a reference to the\r\ncursor in order to correctly format the SQL query.\r\n- Updated psycopg2 instrumentation to leverage dbapi's `cursor_factory`\r\nmechanism instead of wrapping the cursor with wrapt. This results in a\r\nsimpler instrumentation without monkey patching objects at runtime and\r\nallows psycopg2's type registration system to work. This should make it\r\npossible to use psycopg2 instrumentation when using the JSONB feature or\r\nwith frameworks like Django.",
          "timestamp": "2021-01-20T10:45:28-08:00",
          "tree_id": "e93205f89443f5f5eb3513e7e53cbf66d1976ae1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8b9202be6f6d073f6510e37f2783c4895d344bab"
        },
        "date": 1611168382436,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1226400.2611256433,
            "unit": "iter/sec",
            "range": "stddev: 4.936506282559344e-7",
            "extra": "mean: 815.3944773969281 nsec\nrounds: 94340"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1576146.5308583528,
            "unit": "iter/sec",
            "range": "stddev: 4.260660714312341e-7",
            "extra": "mean: 634.4587767835333 nsec\nrounds: 188680"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 64993.422220193104,
            "unit": "iter/sec",
            "range": "stddev: 0.00000879745713253007",
            "extra": "mean: 15.38617241314161 usec\nrounds: 29"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 493878.21473826945,
            "unit": "iter/sec",
            "range": "stddev: 8.34466369780769e-7",
            "extra": "mean: 2.0247906673307092 usec\nrounds: 52911"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3aa7a79d30713215af7a90a1c941367b0f95647",
          "message": "Update TraceState (#276)",
          "timestamp": "2021-01-20T12:13:12-08:00",
          "tree_id": "f9050e0bef079ec058c7d01624c6aad0187cd5a8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b3aa7a79d30713215af7a90a1c941367b0f95647"
        },
        "date": 1611173644830,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1293921.5491961401,
            "unit": "iter/sec",
            "range": "stddev: 1.28240129031269e-7",
            "extra": "mean: 772.8443819652424 nsec\nrounds: 94340"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1636325.3738801242,
            "unit": "iter/sec",
            "range": "stddev: 1.1080490460947683e-7",
            "extra": "mean: 611.1254008295169 nsec\nrounds: 158731"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 119146.24786046856,
            "unit": "iter/sec",
            "range": "stddev: 0.000004576612705786215",
            "extra": "mean: 8.39304651180534 usec\nrounds: 43"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 497381.3682450612,
            "unit": "iter/sec",
            "range": "stddev: 1.7640201707422174e-7",
            "extra": "mean: 2.0105296736955722 usec\nrounds: 81301"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#287)",
          "timestamp": "2021-01-20T16:01:24-08:00",
          "tree_id": "0961312fff1a59e4fa73e69a0165a61ba9bb911b",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58"
        },
        "date": 1611187331152,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1246458.692598197,
            "unit": "iter/sec",
            "range": "stddev: 1.632181157155321e-7",
            "extra": "mean: 802.2728758989495 nsec\nrounds: 89286"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1622784.889982957,
            "unit": "iter/sec",
            "range": "stddev: 8.695571922019968e-8",
            "extra": "mean: 616.2246186618747 nsec\nrounds: 196079"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 130020.00802386674,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025572613822425593",
            "extra": "mean: 7.691123967754547 usec\nrounds: 121"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 487732.02887488704,
            "unit": "iter/sec",
            "range": "stddev: 1.572604534511885e-7",
            "extra": "mean: 2.050306194380603 usec\nrounds: 56180"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08e82a92d7bdff2074fb19a853d99063e5058b02",
          "message": "[post-release] updating version to 0.18.dev0 (#289)",
          "timestamp": "2021-01-21T09:10:30-08:00",
          "tree_id": "049cd0c1735a140711868158e4ccd46e9ffc60f0",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/08e82a92d7bdff2074fb19a853d99063e5058b02"
        },
        "date": 1611249086333,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1128207.9458439199,
            "unit": "iter/sec",
            "range": "stddev: 5.26785695272501e-7",
            "extra": "mean: 886.3614227180274 nsec\nrounds: 87720"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1428676.3891997193,
            "unit": "iter/sec",
            "range": "stddev: 3.9417407161091895e-7",
            "extra": "mean: 699.9485730705995 nsec\nrounds: 151516"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 106889.29646524564,
            "unit": "iter/sec",
            "range": "stddev: 0.000005285428385985004",
            "extra": "mean: 9.35547368229843 usec\nrounds: 38"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 480385.06941343145,
            "unit": "iter/sec",
            "range": "stddev: 6.697819991633792e-7",
            "extra": "mean: 2.0816633648107303 usec\nrounds: 66226"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3a078296c098d861a2e70795404a1e5938d44cc",
          "message": "Added Zoom passcode (#295)",
          "timestamp": "2021-01-26T08:15:47-08:00",
          "tree_id": "ba9b86df7270b95a084ae310f92e9b726eeb0634",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f3a078296c098d861a2e70795404a1e5938d44cc"
        },
        "date": 1611677826864,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 880256.5077693874,
            "unit": "iter/sec",
            "range": "stddev: 0.000007277521791242573",
            "extra": "mean: 1.136032498679332 usec\nrounds: 84034"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1185075.264807294,
            "unit": "iter/sec",
            "range": "stddev: 0.000002494186009117183",
            "extra": "mean: 843.8282611211288 nsec\nrounds: 163935"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 55918.24752131733,
            "unit": "iter/sec",
            "range": "stddev: 0.000011580904485160296",
            "extra": "mean: 17.88325000025755 usec\nrounds: 12"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 361734.0030169681,
            "unit": "iter/sec",
            "range": "stddev: 0.00000899193232645166",
            "extra": "mean: 2.7644622613846237 usec\nrounds: 75758"
          }
        ]
      },
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
          "id": "c9075cf1f22341b3d6e8c298de93cbb344450aca",
          "message": "Add readTheDocs (#252)\n\nCo-authored-by: Aaron Abbott <aaronabbott@google.com>\r\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-26T09:06:39-08:00",
          "tree_id": "8b86f1c8f9aba2a680890ffa3666177f0aee73ba",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/c9075cf1f22341b3d6e8c298de93cbb344450aca"
        },
        "date": 1611680942427,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1315327.7745407338,
            "unit": "iter/sec",
            "range": "stddev: 1.074039475226545e-7",
            "extra": "mean: 760.2667710329197 nsec\nrounds: 99010"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1627489.5070459521,
            "unit": "iter/sec",
            "range": "stddev: 1.013529806257303e-7",
            "extra": "mean: 614.4432856068577 nsec\nrounds: 196079"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 128741.88821692685,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030700161782490686",
            "extra": "mean: 7.767479674641909 usec\nrounds: 123"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 493554.243872193,
            "unit": "iter/sec",
            "range": "stddev: 1.7643442447573275e-7",
            "extra": "mean: 2.0261197475569723 usec\nrounds: 71943"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f279d396231ceb9e08429443234db6e9d4d6d437",
          "message": "updating readme (#296)\n\nAdding more details to the readme including a link to the read the docs",
          "timestamp": "2021-01-26T09:35:37-08:00",
          "tree_id": "18d08ec0e004137fd205213222edf4160c7bce83",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f279d396231ceb9e08429443234db6e9d4d6d437"
        },
        "date": 1611682586148,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1041695.020672439,
            "unit": "iter/sec",
            "range": "stddev: 1.6523571225109124e-7",
            "extra": "mean: 959.973869659544 nsec\nrounds: 61729"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1293335.893700653,
            "unit": "iter/sec",
            "range": "stddev: 1.3728367395601637e-7",
            "extra": "mean: 773.194345622525 nsec\nrounds: 166667"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 112408.38053104267,
            "unit": "iter/sec",
            "range": "stddev: 0.000002904490107822465",
            "extra": "mean: 8.896133858309971 usec\nrounds: 127"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 432139.0313618995,
            "unit": "iter/sec",
            "range": "stddev: 2.8734549350738565e-7",
            "extra": "mean: 2.3140700733476196 usec\nrounds: 61350"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc260c748d468a3f2f5c9657c23aee848e6e7eb",
          "message": "update python version for readthedocs (#297)",
          "timestamp": "2021-01-26T09:51:37-08:00",
          "tree_id": "bf7cd69d2f07891fde7b65f79a8275e1aec57236",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/fcc260c748d468a3f2f5c9657c23aee848e6e7eb"
        },
        "date": 1611683537735,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1154320.7084579929,
            "unit": "iter/sec",
            "range": "stddev: 4.250211877170252e-7",
            "extra": "mean: 866.3103699628302 nsec\nrounds: 50762"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1375215.6683216188,
            "unit": "iter/sec",
            "range": "stddev: 4.835836564675555e-7",
            "extra": "mean: 727.1586726614665 nsec\nrounds: 163935"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 117614.87964693709,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034867486889769115",
            "extra": "mean: 8.502325581608856 usec\nrounds: 129"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 460784.430548509,
            "unit": "iter/sec",
            "range": "stddev: 7.783640796821116e-7",
            "extra": "mean: 2.1702122157417927 usec\nrounds: 50001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "theegrandmaster@gmail.com",
            "name": "M.J",
            "username": "theelous3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c",
          "message": "Aiohttp instrumentation readme (#286)",
          "timestamp": "2021-01-28T09:12:31-08:00",
          "tree_id": "84870866cf1256c3930a9b9f445c1dfe00efadd8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c"
        },
        "date": 1611854015417,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1059834.2818752576,
            "unit": "iter/sec",
            "range": "stddev: 1.4340316039418396e-7",
            "extra": "mean: 943.5437380178082 nsec\nrounds: 97078"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2127231.78870535,
            "unit": "iter/sec",
            "range": "stddev: 2.198732484583102e-8",
            "extra": "mean: 470.09451687854477 nsec\nrounds: 104156"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 116073.13697033325,
            "unit": "iter/sec",
            "range": "stddev: 0.000002840495210654405",
            "extra": "mean: 8.615257811595 usec\nrounds: 128"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 442037.82314306515,
            "unit": "iter/sec",
            "range": "stddev: 2.556853939185142e-7",
            "extra": "mean: 2.2622498520366454 usec\nrounds: 67568"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f022385e37d14f5baadda2292a1115ef244b7523",
          "message": "update references to main (#306)",
          "timestamp": "2021-01-29T12:09:22-08:00",
          "tree_id": "b5abf4db59338681d5cfa6418f374bbb6cc38789",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f022385e37d14f5baadda2292a1115ef244b7523"
        },
        "date": 1611951062133,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1179233.0625297094,
            "unit": "iter/sec",
            "range": "stddev: 1.222482287901752e-7",
            "extra": "mean: 848.0087878937046 nsec\nrounds: 76924"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1561685.6736271435,
            "unit": "iter/sec",
            "range": "stddev: 1.1462137276424967e-7",
            "extra": "mean: 640.3337220078465 nsec\nrounds: 181819"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 127041.16586674754,
            "unit": "iter/sec",
            "range": "stddev: 0.000004174585012682805",
            "extra": "mean: 7.871464286221144 usec\nrounds: 56"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 485712.6433616415,
            "unit": "iter/sec",
            "range": "stddev: 2.0617454087115248e-7",
            "extra": "mean: 2.058830490964678 usec\nrounds: 73530"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0adb23143e56dffc3face697b17349dd3281f56",
          "message": "Remove 'component' span attribute in instrumentations (#301)",
          "timestamp": "2021-01-29T13:15:26-08:00",
          "tree_id": "4661d9ccf175efe020f4f9afe15b86d61eb89b14",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f0adb23143e56dffc3face697b17349dd3281f56"
        },
        "date": 1611954972100,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1124419.1387552954,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012443001816606095",
            "extra": "mean: 889.3480780725376 nsec\nrounds: 59524"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1371250.215795755,
            "unit": "iter/sec",
            "range": "stddev: 0.000001146153938977028",
            "extra": "mean: 729.2615078420874 nsec\nrounds: 196040"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 98022.96447400084,
            "unit": "iter/sec",
            "range": "stddev: 0.000005337851271632051",
            "extra": "mean: 10.201691056438467 usec\nrounds: 123"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 453141.996450663,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025925957220230112",
            "extra": "mean: 2.2068137754450605 usec\nrounds: 75758"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fd68a2bf9b91f00bd30f47b4aac84e0052af034",
          "message": "Remove Configuration from instrumentations (#285)",
          "timestamp": "2021-02-04T08:02:37-08:00",
          "tree_id": "bdd0d76071a8dc726d87e3d7837280caa60fab24",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2fd68a2bf9b91f00bd30f47b4aac84e0052af034"
        },
        "date": 1612454608051,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1064763.1773755327,
            "unit": "iter/sec",
            "range": "stddev: 2.945910050405305e-7",
            "extra": "mean: 939.1759794556725 nsec\nrounds: 59524"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1425806.1832679838,
            "unit": "iter/sec",
            "range": "stddev: 3.122262131076565e-7",
            "extra": "mean: 701.357598062855 nsec\nrounds: 178572"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 115563.73200388883,
            "unit": "iter/sec",
            "range": "stddev: 0.000003436518379287864",
            "extra": "mean: 8.653233870695253 usec\nrounds: 124"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 445015.8496782605,
            "unit": "iter/sec",
            "range": "stddev: 4.2109738634416206e-7",
            "extra": "mean: 2.247110975312417 usec\nrounds: 53192"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b016f6f774225065dc5fc3e5df0f7858827a07ea",
          "message": "update requirements for snappy (#314)",
          "timestamp": "2021-02-04T15:10:10-08:00",
          "tree_id": "8e066a24cd6aa230b9dc9dfc6bf9a1dc7f37b483",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b016f6f774225065dc5fc3e5df0f7858827a07ea"
        },
        "date": 1612480255560,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1088093.0940346932,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026376795087354736",
            "extra": "mean: 919.0390100648093 nsec\nrounds: 29941"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2075353.355059938,
            "unit": "iter/sec",
            "range": "stddev: 4.667467403266833e-7",
            "extra": "mean: 481.84565657792115 nsec\nrounds: 38023"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 109857.50659786849,
            "unit": "iter/sec",
            "range": "stddev: 0.000003775934730561902",
            "extra": "mean: 9.102700679895118 usec\nrounds: 147"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 438783.49439046194,
            "unit": "iter/sec",
            "range": "stddev: 0.000010813443820991886",
            "extra": "mean: 2.2790282970628932 usec\nrounds: 33113"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53b9a012f76c4fc883c3c245fddc29142706d0d",
          "message": "Fix failing aiopg tests (#317)",
          "timestamp": "2021-02-04T17:39:24-08:00",
          "tree_id": "6e0ed7b51c1d7108b87c3ec62a8ff3ae6a154fe8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b53b9a012f76c4fc883c3c245fddc29142706d0d"
        },
        "date": 1612489205341,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1310782.6614599559,
            "unit": "iter/sec",
            "range": "stddev: 4.1980246003741653e-7",
            "extra": "mean: 762.90298109848 nsec\nrounds: 68028"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1564368.0698275913,
            "unit": "iter/sec",
            "range": "stddev: 3.604253599201841e-7",
            "extra": "mean: 639.2357523061754 nsec\nrounds: 172414"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 101569.01036490581,
            "unit": "iter/sec",
            "range": "stddev: 0.000005384245797398527",
            "extra": "mean: 9.84552272791978 usec\nrounds: 44"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 499041.4663582935,
            "unit": "iter/sec",
            "range": "stddev: 6.514736513967004e-7",
            "extra": "mean: 2.003841498978838 usec\nrounds: 77520"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31176812+garnertan@users.noreply.github.com",
            "name": "Garner Jervis Tan",
            "username": "garnertan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55efeb6063e2704b70c46290e005cb2278f3dbd4",
          "message": "Case insensitive header key retrieval for asgi instrumentation (#308)",
          "timestamp": "2021-02-05T08:51:06-08:00",
          "tree_id": "1d412776f2f4d7bea57e1f80bafa6b4317361bb4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/55efeb6063e2704b70c46290e005cb2278f3dbd4"
        },
        "date": 1612543908114,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1308388.0819827723,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012216927498309191",
            "extra": "mean: 764.2992272480568 nsec\nrounds: 61729"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2326407.2663095007,
            "unit": "iter/sec",
            "range": "stddev: 3.767585604501124e-7",
            "extra": "mean: 429.8473506688585 nsec\nrounds: 36764"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 122261.01367070297,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034401523914472744",
            "extra": "mean: 8.179222222820707 usec\nrounds: 153"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 476401.027366742,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025580190794575945",
            "extra": "mean: 2.0990718796879966 usec\nrounds: 36102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ade29f692bb7d0ab23aad638f9503bf6dbaec507",
          "message": "gRPC instrumentation: client additions (#269)\n\nThe docs on metric labels suggests that they should probably be strings,\r\nand all others I can find are strings, and so these ought to be also.\r\nOtherwise, some of the exporters/processors have to handle things\r\nspecifically, and not all of these come out as nice as could be when you\r\n`str()` them.\r\n\r\nI've also made sure to use the `StatusCode` name, as that's the\r\ninteresting thing.\r\n\r\nFinally, there's no need to report specifically that `error=false`, so\r\nI've removed that tag.",
          "timestamp": "2021-02-05T09:09:57-08:00",
          "tree_id": "0ba0a2485e59a499caa935b144abe3b86fa2ac9c",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/ade29f692bb7d0ab23aad638f9503bf6dbaec507"
        },
        "date": 1612545036193,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1183292.6227299795,
            "unit": "iter/sec",
            "range": "stddev: 2.3350334707985192e-7",
            "extra": "mean: 845.0994967693586 nsec\nrounds: 54645"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1734251.9689379348,
            "unit": "iter/sec",
            "range": "stddev: 1.0094807691089374e-7",
            "extra": "mean: 576.6174799919099 nsec\nrounds: 200000"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 130421.8950755423,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025464987554984564",
            "extra": "mean: 7.667424242078258 usec\nrounds: 132"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 516469.1597450323,
            "unit": "iter/sec",
            "range": "stddev: 1.605879771348142e-7",
            "extra": "mean: 1.9362240341585442 usec\nrounds: 84746"
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
      },
      {
        "commit": {
          "author": {
            "email": "moaddib666@gmail.com",
            "name": "Max Nikitenko",
            "username": "moaddib666"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "187987d9ccc359ca2b1e72cfafd10d184c3ab655",
          "message": "Feature/urllib instrumentation (#222)",
          "timestamp": "2020-12-15T10:11:33-08:00",
          "tree_id": "0b35fa021a647e4c9db902738c9ab8f2cbaa2d59",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/187987d9ccc359ca2b1e72cfafd10d184c3ab655"
        },
        "date": 1608055953677,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1126498.9628437927,
            "unit": "iter/sec",
            "range": "stddev: 1.3781255215427925e-7",
            "extra": "mean: 887.7060991477061 nsec\nrounds: 85471"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1653241.6229772344,
            "unit": "iter/sec",
            "range": "stddev: 1.433417297186726e-7",
            "extra": "mean: 604.8722619257271 nsec\nrounds: 161291"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 40749.79625384752,
            "unit": "iter/sec",
            "range": "stddev: 0.00001764151354002262",
            "extra": "mean: 24.53999999829648 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 262419.01552263997,
            "unit": "iter/sec",
            "range": "stddev: 2.2818908528192303e-7",
            "extra": "mean: 3.810699457157768 usec\nrounds: 42736"
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
          "id": "65801c31d8eba6c3625c29d610b67a97ed547a31",
          "message": "Fix requests and urllib instrumentations span name callback parameters (#259)",
          "timestamp": "2020-12-16T08:17:23-08:00",
          "tree_id": "595b2219804af9c1545baf22673099f5ac2b41e4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/65801c31d8eba6c3625c29d610b67a97ed547a31"
        },
        "date": 1608135495858,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 997582.1912660672,
            "unit": "iter/sec",
            "range": "stddev: 6.524649660623906e-7",
            "extra": "mean: 1.002423668701287 usec\nrounds: 51021"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1369747.8229299036,
            "unit": "iter/sec",
            "range": "stddev: 0.00000129222549699572",
            "extra": "mean: 730.0613903229213 nsec\nrounds: 147059"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 24987.50624856342,
            "unit": "iter/sec",
            "range": "stddev: 0.000024234727153686262",
            "extra": "mean: 40.01999999729833 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 222178.61286032922,
            "unit": "iter/sec",
            "range": "stddev: 0.000003299326200756735",
            "extra": "mean: 4.500883262911728 usec\nrounds: 30770"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "azfaarq@amazon.com",
            "name": "Azfaar Qureshi",
            "username": "AzfaarQureshi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6f5b90aeb181bf24a4c64f34e74012b5b246e51",
          "message": "Prometheus Remote Write Exporter (6/6) (#227)\n\n* adding README\r\n\r\nadding sample app\r\n\r\nadding examples readme\r\n\r\nfixing lint errors\r\n\r\nlinting examples\r\n\r\nupdating readme tls_config example\r\n\r\nexcluding examples\r\n\r\nadding examples to exclude in all linters\r\n\r\nadding isort.cfg skip\r\n\r\nchanging isort to path\r\n\r\nignoring yml only\r\n\r\nadding it to excluded directories in pylintrc\r\n\r\nonly adding exclude to directory\r\n\r\nremoving readme.rst and adding explicit file names to ignore\r\n\r\nadding the rest of the files\r\n\r\nadding readme.rst back\r\n\r\nadding to ignore glob instead\r\n\r\nreverting back to ignore list\r\n\r\nconverting README.md to README.rst\r\n\r\n* addressing readme comments\r\n\r\n* adding link to spec for details on aggregators\r\n\r\n* updating readme\r\n\r\n* adding python-snappy to setup.cfg",
          "timestamp": "2020-12-22T11:06:22-08:00",
          "tree_id": "4478cadeaead5e63e0e180f5d1fe3a78d0046e1d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f6f5b90aeb181bf24a4c64f34e74012b5b246e51"
        },
        "date": 1608664050033,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 978775.7395486638,
            "unit": "iter/sec",
            "range": "stddev: 9.285014961808802e-7",
            "extra": "mean: 1.021684497882143 usec\nrounds: 71429"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1263143.6276996874,
            "unit": "iter/sec",
            "range": "stddev: 0.000012779564656233862",
            "extra": "mean: 791.6756084350451 nsec\nrounds: 158731"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 41624.17532093508,
            "unit": "iter/sec",
            "range": "stddev: 0.000014704745599419265",
            "extra": "mean: 24.02450000005274 usec\nrounds: 8"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 198680.28770977235,
            "unit": "iter/sec",
            "range": "stddev: 0.0000038461593521940625",
            "extra": "mean: 5.0332119584041335 usec\nrounds: 49505"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adamantike@users.noreply.github.com",
            "name": "Michael Manganiello",
            "username": "adamantike"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9ea61cfd8a991adec22325f28357f9ff02ef32f",
          "message": "Celery: Add support for new major version 5.x (#266)",
          "timestamp": "2020-12-22T15:48:23-08:00",
          "tree_id": "d2f04b14c3bbff2f7f897e71e3501154087dbaa8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f9ea61cfd8a991adec22325f28357f9ff02ef32f"
        },
        "date": 1608680968109,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 903533.065685252,
            "unit": "iter/sec",
            "range": "stddev: 1.5752003065593575e-7",
            "extra": "mean: 1.1067663575118707 usec\nrounds: 89286"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1380585.200207442,
            "unit": "iter/sec",
            "range": "stddev: 1.3159084565524393e-7",
            "extra": "mean: 724.3305229186459 nsec\nrounds: 138889"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 40617.38424172298,
            "unit": "iter/sec",
            "range": "stddev: 0.000017406090892525845",
            "extra": "mean: 24.619999999231368 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 226137.2642401695,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018382067053557224",
            "extra": "mean: 4.422092941470929 usec\nrounds: 31848"
          }
        ]
      },
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
          "id": "cfaa2b7fff6121d52fc2deb74a9558d75cb1197f",
          "message": "Set max number of commits in performance graph (#270)",
          "timestamp": "2020-12-22T16:32:58-08:00",
          "tree_id": "24384fa664e8f32dfa4e748ae5f0febbdee064a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cfaa2b7fff6121d52fc2deb74a9558d75cb1197f"
        },
        "date": 1608683623865,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1182973.4992623455,
            "unit": "iter/sec",
            "range": "stddev: 1.2673344528043204e-7",
            "extra": "mean: 845.327474050399 nsec\nrounds: 53192"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1681934.4470829775,
            "unit": "iter/sec",
            "range": "stddev: 8.229845010397908e-8",
            "extra": "mean: 594.5534926966541 nsec\nrounds: 149254"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 45495.905369253815,
            "unit": "iter/sec",
            "range": "stddev: 0.000016439038904904007",
            "extra": "mean: 21.97999999964395 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 262492.59948975104,
            "unit": "iter/sec",
            "range": "stddev: 2.2831681985615906e-7",
            "extra": "mean: 3.8096312122469755 usec\nrounds: 42195"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df79be6ea935073ba94c80f19ecd4360565ef36b",
          "message": "Add CodeQL analysis (#277)",
          "timestamp": "2020-12-31T12:52:03-08:00",
          "tree_id": "2465c1d4e58cc81e70324a35aba97ba2225a6fbd",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/df79be6ea935073ba94c80f19ecd4360565ef36b"
        },
        "date": 1609447970260,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1207736.6309621758,
            "unit": "iter/sec",
            "range": "stddev: 1.299587969264121e-7",
            "extra": "mean: 827.9950896275483 nsec\nrounds: 80646"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1590908.55540821,
            "unit": "iter/sec",
            "range": "stddev: 1.056472122234254e-7",
            "extra": "mean: 628.5716401489907 nsec\nrounds: 158731"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 45871.13879754695,
            "unit": "iter/sec",
            "range": "stddev: 0.000015429311398413756",
            "extra": "mean: 21.80019999968863 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 261793.0556737889,
            "unit": "iter/sec",
            "range": "stddev: 3.2606957645937604e-7",
            "extra": "mean: 3.819811023734964 usec\nrounds: 39841"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "472f84538144c1a8cc7260ae67c5dad17abb32bb",
          "message": "Upgrade isort and enable black compat mode (#248)",
          "timestamp": "2021-01-05T07:23:53-08:00",
          "tree_id": "af865a041531f974faba5248eccc4d7c7b4da4a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/472f84538144c1a8cc7260ae67c5dad17abb32bb"
        },
        "date": 1609860307509,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 876442.1427185974,
            "unit": "iter/sec",
            "range": "stddev: 0.000008112074837600424",
            "extra": "mean: 1.1409766272741562 usec\nrounds: 79366"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1258742.6132691298,
            "unit": "iter/sec",
            "range": "stddev: 0.000003808880943970021",
            "extra": "mean: 794.4435895459683 nsec\nrounds: 136987"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 41084.634348777436,
            "unit": "iter/sec",
            "range": "stddev: 0.000017563399448317072",
            "extra": "mean: 24.33999999880143 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 214266.33041436435,
            "unit": "iter/sec",
            "range": "stddev: 0.000008858016789341519",
            "extra": "mean: 4.667088842498608 usec\nrounds: 38315"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fea7f7a2709b0c846934bafb27f3c1c1e415eea",
          "message": "Ensure SQLAlchemy spans have kind set to CLIENT (#278)\n\nSQLAlchemy spans were missing kind field and it was being set to\r\ninternal instead of client. This commit changes sqlalchemy spans to have\r\nkind set to \"client\" instead.",
          "timestamp": "2021-01-05T09:05:58-08:00",
          "tree_id": "52b5dfa2eb3a72e0a8e28d1b94bfa4ad3b7a485f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/9fea7f7a2709b0c846934bafb27f3c1c1e415eea"
        },
        "date": 1609866411147,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 988647.6799821432,
            "unit": "iter/sec",
            "range": "stddev: 1.827900086374302e-7",
            "extra": "mean: 1.0114826750193373 usec\nrounds: 80000"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1395493.5216344674,
            "unit": "iter/sec",
            "range": "stddev: 1.771060518842705e-7",
            "extra": "mean: 716.5923628428982 nsec\nrounds: 107527"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 40815.9933459702,
            "unit": "iter/sec",
            "range": "stddev: 0.000017519573346168125",
            "extra": "mean: 24.500199995713956 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 233634.69843090017,
            "unit": "iter/sec",
            "range": "stddev: 3.1765451590229127e-7",
            "extra": "mean: 4.280186148359124 usec\nrounds: 37454"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7",
          "message": "datadog-exporter: bugfix for unintentional type change (#261)",
          "timestamp": "2021-01-05T09:58:47-08:00",
          "tree_id": "96df3088c43358e88fbb30f54b7f94f4f87eb9c7",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7"
        },
        "date": 1609869576122,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1012272.2812535722,
            "unit": "iter/sec",
            "range": "stddev: 3.990525671613981e-7",
            "extra": "mean: 987.8765017270113 nsec\nrounds: 52357"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1389325.3739207147,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027842202584551383",
            "extra": "mean: 719.7737972480646 nsec\nrounds: 113637"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 35285.815102240354,
            "unit": "iter/sec",
            "range": "stddev: 0.000028945604158767073",
            "extra": "mean: 28.340000000071086 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 237936.11729956596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012356192615645781",
            "extra": "mean: 4.2028087679559025 usec\nrounds: 35972"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "681004+thomasdesr@users.noreply.github.com",
            "name": "Thomas Desrosiers",
            "username": "thomasdesr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21a5c164fa9539d7c39e21ffa47d9b13f8971a3b",
          "message": "Adds back retry_attempts to botocore (#275)",
          "timestamp": "2021-01-05T17:27:18-08:00",
          "tree_id": "5f82d209437b74e3e1b0e70c22d91697b8b52682",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/21a5c164fa9539d7c39e21ffa47d9b13f8971a3b"
        },
        "date": 1609896479700,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1165588.7804013249,
            "unit": "iter/sec",
            "range": "stddev: 6.431346797482966e-7",
            "extra": "mean: 857.9355059128908 nsec\nrounds: 74627"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1673362.175714283,
            "unit": "iter/sec",
            "range": "stddev: 9.856833781271074e-8",
            "extra": "mean: 597.5992612436964 nsec\nrounds: 136987"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 58105.75246458122,
            "unit": "iter/sec",
            "range": "stddev: 0.00001155243601223977",
            "extra": "mean: 17.210000001455228 usec\nrounds: 10"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 255799.19914236807,
            "unit": "iter/sec",
            "range": "stddev: 2.785361792641623e-7",
            "extra": "mean: 3.9093163831347186 usec\nrounds: 41494"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8abed0718471cb21462c5699a983be31d6c24c00",
          "message": "fix docker-tests build (#282)",
          "timestamp": "2021-01-06T20:39:12-08:00",
          "tree_id": "cab2e78c9d40fd9b100cc8b9f1351507bdd88767",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8abed0718471cb21462c5699a983be31d6c24c00"
        },
        "date": 1609994415166,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1053715.3499210794,
            "unit": "iter/sec",
            "range": "stddev: 5.380025717013967e-7",
            "extra": "mean: 949.0229026984352 nsec\nrounds: 78113"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1457949.4617557507,
            "unit": "iter/sec",
            "range": "stddev: 8.848979376213685e-7",
            "extra": "mean: 685.8948312212001 nsec\nrounds: 163908"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 42654.47317072328,
            "unit": "iter/sec",
            "range": "stddev: 0.000016115160169854455",
            "extra": "mean: 23.444200002131765 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 234443.57682959485,
            "unit": "iter/sec",
            "range": "stddev: 0.000011422469733059616",
            "extra": "mean: 4.265418628751127 usec\nrounds: 37587"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ThePumpingLemma@users.noreply.github.com",
            "name": "Dave Grochowski",
            "username": "ThePumpingLemma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb01a6bcb796fc2f9173775496d0eff3a820e08d",
          "message": "Use instanceof to check if responses are valid Response objects (#273)",
          "timestamp": "2021-01-07T18:24:19-08:00",
          "tree_id": "15354b7a8bf9b5fd800ee52ad7e564cbb694ddc8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cb01a6bcb796fc2f9173775496d0eff3a820e08d"
        },
        "date": 1610072705787,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1158476.848239647,
            "unit": "iter/sec",
            "range": "stddev: 4.307595703356306e-7",
            "extra": "mean: 863.2024036730134 nsec\nrounds: 60241"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1700999.75249222,
            "unit": "iter/sec",
            "range": "stddev: 3.792283806596404e-7",
            "extra": "mean: 587.8895623205411 nsec\nrounds: 156251"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 41631.626706702664,
            "unit": "iter/sec",
            "range": "stddev: 0.00001642974407425518",
            "extra": "mean: 24.020200004315484 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 283945.2771370186,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010713912867905648",
            "extra": "mean: 3.521805363635075 usec\nrounds: 43291"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57b8106edc58e16aa52eced9289418b7c0850704",
          "message": "Fix AttributeError: __aexit__ for aiopg.connect and aiopg.create_pool (#235)",
          "timestamp": "2021-01-08T08:56:38-08:00",
          "tree_id": "5ebc92d214b376906a57445efd1749bead9ef8ca",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/57b8106edc58e16aa52eced9289418b7c0850704"
        },
        "date": 1610125047175,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1312616.7867534272,
            "unit": "iter/sec",
            "range": "stddev: 8.433621676109995e-7",
            "extra": "mean: 761.8369733586595 nsec\nrounds: 59524"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2398196.7690671463,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010521572697216233",
            "extra": "mean: 416.979962986184 nsec\nrounds: 131579"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 55401.35511196672,
            "unit": "iter/sec",
            "range": "stddev: 0.00001054719921637852",
            "extra": "mean: 18.050100001687497 usec\nrounds: 10"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 250333.46457411733,
            "unit": "iter/sec",
            "range": "stddev: 0.0000068734836843522006",
            "extra": "mean: 3.994671674045903 usec\nrounds: 60976"
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
          "id": "d12f67fc31f0376440b21083f328834693ac7ee2",
          "message": "Fix ids_generator references from moving from api to sdk (#283)",
          "timestamp": "2021-01-11T12:40:38-08:00",
          "tree_id": "822aedb5e81f23fbeb4353fa99e9195203be2326",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/d12f67fc31f0376440b21083f328834693ac7ee2"
        },
        "date": 1610397697085,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1170462.0825343982,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028259474558094914",
            "extra": "mean: 854.3634304109219 nsec\nrounds: 78125"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1739279.074288168,
            "unit": "iter/sec",
            "range": "stddev: 1.3060891894585943e-7",
            "extra": "mean: 574.9508602633355 nsec\nrounds: 158731"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 42301.1844423179,
            "unit": "iter/sec",
            "range": "stddev: 0.000018535587395237757",
            "extra": "mean: 23.63999999488442 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 254495.41308227196,
            "unit": "iter/sec",
            "range": "stddev: 6.92974872183508e-7",
            "extra": "mean: 3.9293439040362004 usec\nrounds: 32259"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c8f2785bdbc707bfe3edd969c4f021d2ea20dce",
          "message": "SQLAlchemy: Use SQL operation and DB name as the Span name (#254)\n\nCurrent instrumentation uses the entire SQL query as the operation name\r\nwhich makes traces very hard to read and understand in addition to\r\nintroducing high-cardinality issues. This commit fixes the problem by\r\nusing only the SQL operation name and the DB name instead of the entire\r\nquery.",
          "timestamp": "2021-01-20T08:41:19-08:00",
          "tree_id": "3ee47e3717a0ef9c585b079fa12f7e4daddb9d22",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8c8f2785bdbc707bfe3edd969c4f021d2ea20dce"
        },
        "date": 1611160950966,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 975370.2495697472,
            "unit": "iter/sec",
            "range": "stddev: 1.7644734169512607e-7",
            "extra": "mean: 1.025251693335036 usec\nrounds: 70423"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1395711.9582914354,
            "unit": "iter/sec",
            "range": "stddev: 1.3377831038738216e-7",
            "extra": "mean: 716.4802121665223 nsec\nrounds: 117648"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 33990.48266660857,
            "unit": "iter/sec",
            "range": "stddev: 0.00002149725564362613",
            "extra": "mean: 29.419999998481217 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 236304.66234820176,
            "unit": "iter/sec",
            "range": "stddev: 3.6853411207546123e-7",
            "extra": "mean: 4.231825094193322 usec\nrounds: 34247"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b9202be6f6d073f6510e37f2783c4895d344bab",
          "message": "Updated dbapi and psycopg2 instrumentations. (#246)\n\nChanges:\r\n\r\n- Update dbapi instrumentation to use the SQL statement name as the span\r\ninstead of the entire SQL query.\r\n- Renamed TracedCursor with CursorTracing. The class was not a valid\r\nCursor so the name was confusing.\r\n- Updated CursorTracing's (previously TracedCursor) traced_execution\r\nmethod to accept the cursor instance as the first argument. This is\r\nrequired as for some dbapi implementations, we need a reference to the\r\ncursor in order to correctly format the SQL query.\r\n- Updated psycopg2 instrumentation to leverage dbapi's `cursor_factory`\r\nmechanism instead of wrapping the cursor with wrapt. This results in a\r\nsimpler instrumentation without monkey patching objects at runtime and\r\nallows psycopg2's type registration system to work. This should make it\r\npossible to use psycopg2 instrumentation when using the JSONB feature or\r\nwith frameworks like Django.",
          "timestamp": "2021-01-20T10:45:28-08:00",
          "tree_id": "e93205f89443f5f5eb3513e7e53cbf66d1976ae1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8b9202be6f6d073f6510e37f2783c4895d344bab"
        },
        "date": 1611168380140,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1191146.8039891112,
            "unit": "iter/sec",
            "range": "stddev: 1.2403316617407965e-7",
            "extra": "mean: 839.5270815075297 nsec\nrounds: 89286"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1678127.7593343782,
            "unit": "iter/sec",
            "range": "stddev: 1.8086314711083212e-7",
            "extra": "mean: 595.902185895933 nsec\nrounds: 144928"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 44802.867379104246,
            "unit": "iter/sec",
            "range": "stddev: 0.000016831725993296545",
            "extra": "mean: 22.32000000219614 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 259654.70692002418,
            "unit": "iter/sec",
            "range": "stddev: 3.1634015382763193e-7",
            "extra": "mean: 3.8512685245024594 usec\nrounds: 38611"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3aa7a79d30713215af7a90a1c941367b0f95647",
          "message": "Update TraceState (#276)",
          "timestamp": "2021-01-20T12:13:12-08:00",
          "tree_id": "f9050e0bef079ec058c7d01624c6aad0187cd5a8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b3aa7a79d30713215af7a90a1c941367b0f95647"
        },
        "date": 1611173650625,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1184430.4694426714,
            "unit": "iter/sec",
            "range": "stddev: 1.328099382836144e-7",
            "extra": "mean: 844.2876351117054 nsec\nrounds: 92593"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1653305.4216788502,
            "unit": "iter/sec",
            "range": "stddev: 1.514488581625173e-7",
            "extra": "mean: 604.8489207665873 nsec\nrounds: 133334"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 38343.558285415216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000254957251354146",
            "extra": "mean: 26.07999999781896 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 261814.78335551935,
            "unit": "iter/sec",
            "range": "stddev: 4.736767249470183e-7",
            "extra": "mean: 3.8194940223909963 usec\nrounds: 30865"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#287)",
          "timestamp": "2021-01-20T16:01:24-08:00",
          "tree_id": "0961312fff1a59e4fa73e69a0165a61ba9bb911b",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58"
        },
        "date": 1611187340765,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1154800.0756252408,
            "unit": "iter/sec",
            "range": "stddev: 3.8404753866990514e-7",
            "extra": "mean: 865.9507572846082 nsec\nrounds: 77514"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1524260.9873673378,
            "unit": "iter/sec",
            "range": "stddev: 3.0364549250403876e-7",
            "extra": "mean: 656.0556284571535 nsec\nrounds: 156251"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 39554.771497714624,
            "unit": "iter/sec",
            "range": "stddev: 0.0000174833612569607",
            "extra": "mean: 25.281399996401888 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 258674.95625092083,
            "unit": "iter/sec",
            "range": "stddev: 8.902449466817807e-7",
            "extra": "mean: 3.8658554909736846 usec\nrounds: 36496"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08e82a92d7bdff2074fb19a853d99063e5058b02",
          "message": "[post-release] updating version to 0.18.dev0 (#289)",
          "timestamp": "2021-01-21T09:10:30-08:00",
          "tree_id": "049cd0c1735a140711868158e4ccd46e9ffc60f0",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/08e82a92d7bdff2074fb19a853d99063e5058b02"
        },
        "date": 1611249085075,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1089969.5746357013,
            "unit": "iter/sec",
            "range": "stddev: 3.9068774646121605e-7",
            "extra": "mean: 917.456801795801 nsec\nrounds: 87712"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1497871.974510441,
            "unit": "iter/sec",
            "range": "stddev: 3.426069065747517e-7",
            "extra": "mean: 667.6137994549476 nsec\nrounds: 158731"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 42987.82584662986,
            "unit": "iter/sec",
            "range": "stddev: 0.000014563682308388372",
            "extra": "mean: 23.262400000589878 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 258235.84473238335,
            "unit": "iter/sec",
            "range": "stddev: 8.34086962560555e-7",
            "extra": "mean: 3.8724291007560416 usec\nrounds: 42370"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3a078296c098d861a2e70795404a1e5938d44cc",
          "message": "Added Zoom passcode (#295)",
          "timestamp": "2021-01-26T08:15:47-08:00",
          "tree_id": "ba9b86df7270b95a084ae310f92e9b726eeb0634",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f3a078296c098d861a2e70795404a1e5938d44cc"
        },
        "date": 1611677807497,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 988761.1792754792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026595212210563623",
            "extra": "mean: 1.0113665675393488 usec\nrounds: 79366"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1375121.0173564262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015970109153554646",
            "extra": "mean: 727.2087237255888 nsec\nrounds: 169492"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 57344.50815364999,
            "unit": "iter/sec",
            "range": "stddev: 0.00001075046808710919",
            "extra": "mean: 17.438461540564276 usec\nrounds: 13"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 224985.0141674216,
            "unit": "iter/sec",
            "range": "stddev: 0.00002049071275010788",
            "extra": "mean: 4.444740480607542 usec\nrounds: 41153"
          }
        ]
      },
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
          "id": "c9075cf1f22341b3d6e8c298de93cbb344450aca",
          "message": "Add readTheDocs (#252)\n\nCo-authored-by: Aaron Abbott <aaronabbott@google.com>\r\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-26T09:06:39-08:00",
          "tree_id": "8b86f1c8f9aba2a680890ffa3666177f0aee73ba",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/c9075cf1f22341b3d6e8c298de93cbb344450aca"
        },
        "date": 1611680910478,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1063239.3829054423,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010074498820102254",
            "extra": "mean: 940.5219709482241 nsec\nrounds: 74075"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2040484.3915170645,
            "unit": "iter/sec",
            "range": "stddev: 5.643152442620733e-7",
            "extra": "mean: 490.0797105615484 nsec\nrounds: 111112"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 59089.834726700465,
            "unit": "iter/sec",
            "range": "stddev: 0.00001010269557911125",
            "extra": "mean: 16.92338461640912 usec\nrounds: 13"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 232020.03463500485,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027432386090557145",
            "extra": "mean: 4.3099726347904355 usec\nrounds: 30769"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f279d396231ceb9e08429443234db6e9d4d6d437",
          "message": "updating readme (#296)\n\nAdding more details to the readme including a link to the read the docs",
          "timestamp": "2021-01-26T09:35:37-08:00",
          "tree_id": "18d08ec0e004137fd205213222edf4160c7bce83",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f279d396231ceb9e08429443234db6e9d4d6d437"
        },
        "date": 1611682578990,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1089574.899105636,
            "unit": "iter/sec",
            "range": "stddev: 4.559802479851144e-7",
            "extra": "mean: 917.7891311747708 nsec\nrounds: 75758"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1520902.9793968427,
            "unit": "iter/sec",
            "range": "stddev: 4.740864183236775e-7",
            "extra": "mean: 657.504136389146 nsec\nrounds: 138889"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 37369.207776650845,
            "unit": "iter/sec",
            "range": "stddev: 0.000015702961508458007",
            "extra": "mean: 26.759999997238992 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 252981.44713937707,
            "unit": "iter/sec",
            "range": "stddev: 0.000001025764158784394",
            "extra": "mean: 3.9528590389043914 usec\nrounds: 35336"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc260c748d468a3f2f5c9657c23aee848e6e7eb",
          "message": "update python version for readthedocs (#297)",
          "timestamp": "2021-01-26T09:51:37-08:00",
          "tree_id": "bf7cd69d2f07891fde7b65f79a8275e1aec57236",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/fcc260c748d468a3f2f5c9657c23aee848e6e7eb"
        },
        "date": 1611683544819,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1013780.6234005361,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012720114144701232",
            "extra": "mean: 986.4067007373728 nsec\nrounds: 83334"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1387097.4676448747,
            "unit": "iter/sec",
            "range": "stddev: 0.000004840378340126725",
            "extra": "mean: 720.9298721436498 nsec\nrounds: 166667"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 40064.102570363844,
            "unit": "iter/sec",
            "range": "stddev: 0.000017385856323997535",
            "extra": "mean: 24.959999996099214 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 240596.93150401983,
            "unit": "iter/sec",
            "range": "stddev: 0.000001982323464386595",
            "extra": "mean: 4.156328984533588 usec\nrounds: 37175"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "theegrandmaster@gmail.com",
            "name": "M.J",
            "username": "theelous3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c",
          "message": "Aiohttp instrumentation readme (#286)",
          "timestamp": "2021-01-28T09:12:31-08:00",
          "tree_id": "84870866cf1256c3930a9b9f445c1dfe00efadd8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c"
        },
        "date": 1611854015422,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1300605.276215607,
            "unit": "iter/sec",
            "range": "stddev: 6.531311845550633e-7",
            "extra": "mean: 768.8727843006425 nsec\nrounds: 81295"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1749311.1690781673,
            "unit": "iter/sec",
            "range": "stddev: 4.2332803421362275e-7",
            "extra": "mean: 571.6535843802844 nsec\nrounds: 153847"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 34769.547435188964,
            "unit": "iter/sec",
            "range": "stddev: 0.00001752607715757739",
            "extra": "mean: 28.760800003624354 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 305466.9940271953,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014812541220336172",
            "extra": "mean: 3.2736761075763603 usec\nrounds: 38167"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f022385e37d14f5baadda2292a1115ef244b7523",
          "message": "update references to main (#306)",
          "timestamp": "2021-01-29T12:09:22-08:00",
          "tree_id": "b5abf4db59338681d5cfa6418f374bbb6cc38789",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f022385e37d14f5baadda2292a1115ef244b7523"
        },
        "date": 1611951049598,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1135221.9629103541,
            "unit": "iter/sec",
            "range": "stddev: 1.3983874595729468e-7",
            "extra": "mean: 880.8850010585707 nsec\nrounds: 94340"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1765281.5927554509,
            "unit": "iter/sec",
            "range": "stddev: 1.1574099059073751e-7",
            "extra": "mean: 566.481859950223 nsec\nrounds: 144928"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 43936.345018734355,
            "unit": "iter/sec",
            "range": "stddev: 0.000016701581369401674",
            "extra": "mean: 22.76020000238077 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 254720.32905415542,
            "unit": "iter/sec",
            "range": "stddev: 2.2922723310758437e-7",
            "extra": "mean: 3.9258743254347497 usec\nrounds: 41321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0adb23143e56dffc3face697b17349dd3281f56",
          "message": "Remove 'component' span attribute in instrumentations (#301)",
          "timestamp": "2021-01-29T13:15:26-08:00",
          "tree_id": "4661d9ccf175efe020f4f9afe15b86d61eb89b14",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f0adb23143e56dffc3face697b17349dd3281f56"
        },
        "date": 1611954966412,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1201067.0704302506,
            "unit": "iter/sec",
            "range": "stddev: 1.314611345147438e-7",
            "extra": "mean: 832.5929705505757 nsec\nrounds: 76336"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1697590.3419477784,
            "unit": "iter/sec",
            "range": "stddev: 1.5629408514966596e-7",
            "extra": "mean: 589.0702693634682 nsec\nrounds: 144928"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 63405.50993339596,
            "unit": "iter/sec",
            "range": "stddev: 0.000010209703640792849",
            "extra": "mean: 15.771500001347606 usec\nrounds: 14"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 253493.27283847364,
            "unit": "iter/sec",
            "range": "stddev: 3.1322022838516227e-7",
            "extra": "mean: 3.944877861264594 usec\nrounds: 40323"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fd68a2bf9b91f00bd30f47b4aac84e0052af034",
          "message": "Remove Configuration from instrumentations (#285)",
          "timestamp": "2021-02-04T08:02:37-08:00",
          "tree_id": "bdd0d76071a8dc726d87e3d7837280caa60fab24",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2fd68a2bf9b91f00bd30f47b4aac84e0052af034"
        },
        "date": 1612454614656,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1025034.1677585203,
            "unit": "iter/sec",
            "range": "stddev: 3.453603376276289e-7",
            "extra": "mean: 975.5772358171597 nsec\nrounds: 92593"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1473850.0085596035,
            "unit": "iter/sec",
            "range": "stddev: 2.456383746283329e-7",
            "extra": "mean: 678.4950939324566 nsec\nrounds: 140846"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 39430.62181846989,
            "unit": "iter/sec",
            "range": "stddev: 0.000019716382797771528",
            "extra": "mean: 25.361000001566936 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 244118.94495323973,
            "unit": "iter/sec",
            "range": "stddev: 9.542501363136803e-7",
            "extra": "mean: 4.096363763130088 usec\nrounds: 38022"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b016f6f774225065dc5fc3e5df0f7858827a07ea",
          "message": "update requirements for snappy (#314)",
          "timestamp": "2021-02-04T15:10:10-08:00",
          "tree_id": "8e066a24cd6aa230b9dc9dfc6bf9a1dc7f37b483",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b016f6f774225065dc5fc3e5df0f7858827a07ea"
        },
        "date": 1612480261957,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1159365.2056745961,
            "unit": "iter/sec",
            "range": "stddev: 0.0000071148575294326965",
            "extra": "mean: 862.5409794130686 nsec\nrounds: 81968"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 2445606.5499396464,
            "unit": "iter/sec",
            "range": "stddev: 6.021988389313468e-7",
            "extra": "mean: 408.8965169088336 nsec\nrounds: 126583"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 45004.50044508557,
            "unit": "iter/sec",
            "range": "stddev: 0.000017135110154248493",
            "extra": "mean: 22.220000002448614 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 266268.1094815346,
            "unit": "iter/sec",
            "range": "stddev: 0.00000769317796995766",
            "extra": "mean: 3.755613099695474 usec\nrounds: 53192"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53b9a012f76c4fc883c3c245fddc29142706d0d",
          "message": "Fix failing aiopg tests (#317)",
          "timestamp": "2021-02-04T17:39:24-08:00",
          "tree_id": "6e0ed7b51c1d7108b87c3ec62a8ff3ae6a154fe8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b53b9a012f76c4fc883c3c245fddc29142706d0d"
        },
        "date": 1612489214596,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 995561.5818611851,
            "unit": "iter/sec",
            "range": "stddev: 0.000001367309644738185",
            "extra": "mean: 1.0044582055190572 usec\nrounds: 76924"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1339660.2909946502,
            "unit": "iter/sec",
            "range": "stddev: 0.000001317975480946526",
            "extra": "mean: 746.4578943797278 nsec\nrounds: 156250"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 36927.62186369348,
            "unit": "iter/sec",
            "range": "stddev: 0.00002051053387345744",
            "extra": "mean: 27.079999998136373 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 203318.73301736324,
            "unit": "iter/sec",
            "range": "stddev: 0.000003230517270623373",
            "extra": "mean: 4.918385950765299 usec\nrounds: 44643"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31176812+garnertan@users.noreply.github.com",
            "name": "Garner Jervis Tan",
            "username": "garnertan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55efeb6063e2704b70c46290e005cb2278f3dbd4",
          "message": "Case insensitive header key retrieval for asgi instrumentation (#308)",
          "timestamp": "2021-02-05T08:51:06-08:00",
          "tree_id": "1d412776f2f4d7bea57e1f80bafa6b4317361bb4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/55efeb6063e2704b70c46290e005cb2278f3dbd4"
        },
        "date": 1612543907280,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1157122.470830235,
            "unit": "iter/sec",
            "range": "stddev: 1.5152932169774316e-7",
            "extra": "mean: 864.2127563925886 nsec\nrounds: 75758"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1612392.3019557656,
            "unit": "iter/sec",
            "range": "stddev: 1.5352252712927821e-7",
            "extra": "mean: 620.196461361817 nsec\nrounds: 135136"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 62862.669249712526,
            "unit": "iter/sec",
            "range": "stddev: 0.000010908900154335064",
            "extra": "mean: 15.907692306663753 usec\nrounds: 13"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 258293.76887884637,
            "unit": "iter/sec",
            "range": "stddev: 3.0083647565756503e-7",
            "extra": "mean: 3.871560682011859 usec\nrounds: 34722"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ade29f692bb7d0ab23aad638f9503bf6dbaec507",
          "message": "gRPC instrumentation: client additions (#269)\n\nThe docs on metric labels suggests that they should probably be strings,\r\nand all others I can find are strings, and so these ought to be also.\r\nOtherwise, some of the exporters/processors have to handle things\r\nspecifically, and not all of these come out as nice as could be when you\r\n`str()` them.\r\n\r\nI've also made sure to use the `StatusCode` name, as that's the\r\ninteresting thing.\r\n\r\nFinally, there's no need to report specifically that `error=false`, so\r\nI've removed that tag.",
          "timestamp": "2021-02-05T09:09:57-08:00",
          "tree_id": "0ba0a2485e59a499caa935b144abe3b86fa2ac9c",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/ade29f692bb7d0ab23aad638f9503bf6dbaec507"
        },
        "date": 1612545043089,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 993436.7957448154,
            "unit": "iter/sec",
            "range": "stddev: 3.6188008430729434e-7",
            "extra": "mean: 1.00660656448734 usec\nrounds: 90091"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1393877.690554314,
            "unit": "iter/sec",
            "range": "stddev: 1.8456919196978247e-7",
            "extra": "mean: 717.4230614181954 nsec\nrounds: 161291"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 53737.17635999906,
            "unit": "iter/sec",
            "range": "stddev: 0.000013167570353999306",
            "extra": "mean: 18.609090907582207 usec\nrounds: 11"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 233640.27686540384,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018439789507832545",
            "extra": "mean: 4.280083953915544 usec\nrounds: 32363"
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
      },
      {
        "commit": {
          "author": {
            "email": "moaddib666@gmail.com",
            "name": "Max Nikitenko",
            "username": "moaddib666"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "187987d9ccc359ca2b1e72cfafd10d184c3ab655",
          "message": "Feature/urllib instrumentation (#222)",
          "timestamp": "2020-12-15T10:11:33-08:00",
          "tree_id": "0b35fa021a647e4c9db902738c9ab8f2cbaa2d59",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/187987d9ccc359ca2b1e72cfafd10d184c3ab655"
        },
        "date": 1608055958128,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 989443.6246242679,
            "unit": "iter/sec",
            "range": "stddev: 3.3384193196399744e-7",
            "extra": "mean: 1.0106690013589616 usec\nrounds: 90091"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1302654.1897114867,
            "unit": "iter/sec",
            "range": "stddev: 2.1155144581513452e-7",
            "extra": "mean: 767.6634427602625 nsec\nrounds: 135136"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 34482.52081190949,
            "unit": "iter/sec",
            "range": "stddev: 0.000015141723815644062",
            "extra": "mean: 29.000199998563403 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 240405.173317759,
            "unit": "iter/sec",
            "range": "stddev: 0.0000020137134426846133",
            "extra": "mean: 4.15964426305517 usec\nrounds: 42017"
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
          "id": "65801c31d8eba6c3625c29d610b67a97ed547a31",
          "message": "Fix requests and urllib instrumentations span name callback parameters (#259)",
          "timestamp": "2020-12-16T08:17:23-08:00",
          "tree_id": "595b2219804af9c1545baf22673099f5ac2b41e4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/65801c31d8eba6c3625c29d610b67a97ed547a31"
        },
        "date": 1608135497252,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1096668.2197744695,
            "unit": "iter/sec",
            "range": "stddev: 5.311887824595705e-7",
            "extra": "mean: 911.8528119704706 nsec\nrounds: 73525"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1481964.01006613,
            "unit": "iter/sec",
            "range": "stddev: 3.9108151076177326e-7",
            "extra": "mean: 674.7802194976224 nsec\nrounds: 116266"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 42154.25083667983,
            "unit": "iter/sec",
            "range": "stddev: 0.000015643935959836753",
            "extra": "mean: 23.722399998860055 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 253181.84248388442,
            "unit": "iter/sec",
            "range": "stddev: 9.092272346407156e-7",
            "extra": "mean: 3.9497303210582815 usec\nrounds: 45658"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "azfaarq@amazon.com",
            "name": "Azfaar Qureshi",
            "username": "AzfaarQureshi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6f5b90aeb181bf24a4c64f34e74012b5b246e51",
          "message": "Prometheus Remote Write Exporter (6/6) (#227)\n\n* adding README\r\n\r\nadding sample app\r\n\r\nadding examples readme\r\n\r\nfixing lint errors\r\n\r\nlinting examples\r\n\r\nupdating readme tls_config example\r\n\r\nexcluding examples\r\n\r\nadding examples to exclude in all linters\r\n\r\nadding isort.cfg skip\r\n\r\nchanging isort to path\r\n\r\nignoring yml only\r\n\r\nadding it to excluded directories in pylintrc\r\n\r\nonly adding exclude to directory\r\n\r\nremoving readme.rst and adding explicit file names to ignore\r\n\r\nadding the rest of the files\r\n\r\nadding readme.rst back\r\n\r\nadding to ignore glob instead\r\n\r\nreverting back to ignore list\r\n\r\nconverting README.md to README.rst\r\n\r\n* addressing readme comments\r\n\r\n* adding link to spec for details on aggregators\r\n\r\n* updating readme\r\n\r\n* adding python-snappy to setup.cfg",
          "timestamp": "2020-12-22T11:06:22-08:00",
          "tree_id": "4478cadeaead5e63e0e180f5d1fe3a78d0046e1d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f6f5b90aeb181bf24a4c64f34e74012b5b246e51"
        },
        "date": 1608664041074,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1102072.4479082325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014397734811267045",
            "extra": "mean: 907.3813630837345 nsec\nrounds: 84746"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1503945.231473324,
            "unit": "iter/sec",
            "range": "stddev: 6.867445456055578e-7",
            "extra": "mean: 664.9178301661696 nsec\nrounds: 166667"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 37821.482595154324,
            "unit": "iter/sec",
            "range": "stddev: 0.00001545681079889411",
            "extra": "mean: 26.440000004868125 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 234105.8387152126,
            "unit": "iter/sec",
            "range": "stddev: 0.000028302328759813892",
            "extra": "mean: 4.271572231978759 usec\nrounds: 54055"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adamantike@users.noreply.github.com",
            "name": "Michael Manganiello",
            "username": "adamantike"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9ea61cfd8a991adec22325f28357f9ff02ef32f",
          "message": "Celery: Add support for new major version 5.x (#266)",
          "timestamp": "2020-12-22T15:48:23-08:00",
          "tree_id": "d2f04b14c3bbff2f7f897e71e3501154087dbaa8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f9ea61cfd8a991adec22325f28357f9ff02ef32f"
        },
        "date": 1608680968480,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 950725.375415106,
            "unit": "iter/sec",
            "range": "stddev: 0.000004611825804403323",
            "extra": "mean: 1.0518284521051935 usec\nrounds: 57465"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1281933.051210239,
            "unit": "iter/sec",
            "range": "stddev: 0.000003767754500045712",
            "extra": "mean: 780.0719382778426 nsec\nrounds: 161291"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 36547.30317526573,
            "unit": "iter/sec",
            "range": "stddev: 0.000017141966971935714",
            "extra": "mean: 27.361799999425784 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 215384.34315261958,
            "unit": "iter/sec",
            "range": "stddev: 0.000013315074521354625",
            "extra": "mean: 4.642863011130796 usec\nrounds: 47617"
          }
        ]
      },
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
          "id": "cfaa2b7fff6121d52fc2deb74a9558d75cb1197f",
          "message": "Set max number of commits in performance graph (#270)",
          "timestamp": "2020-12-22T16:32:58-08:00",
          "tree_id": "24384fa664e8f32dfa4e748ae5f0febbdee064a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cfaa2b7fff6121d52fc2deb74a9558d75cb1197f"
        },
        "date": 1608683621851,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1210167.720810248,
            "unit": "iter/sec",
            "range": "stddev: 1.1446610662150197e-7",
            "extra": "mean: 826.3317412981949 nsec\nrounds: 69931"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1667227.9465740854,
            "unit": "iter/sec",
            "range": "stddev: 1.151010896346426e-7",
            "extra": "mean: 599.7980072580098 nsec\nrounds: 129871"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 55055.055061701234,
            "unit": "iter/sec",
            "range": "stddev: 0.000013380977001808581",
            "extra": "mean: 18.16363636144367 usec\nrounds: 11"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 270861.4369844142,
            "unit": "iter/sec",
            "range": "stddev: 2.752553984374869e-7",
            "extra": "mean: 3.6919245911611323 usec\nrounds: 40486"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df79be6ea935073ba94c80f19ecd4360565ef36b",
          "message": "Add CodeQL analysis (#277)",
          "timestamp": "2020-12-31T12:52:03-08:00",
          "tree_id": "2465c1d4e58cc81e70324a35aba97ba2225a6fbd",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/df79be6ea935073ba94c80f19ecd4360565ef36b"
        },
        "date": 1609447969133,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1170853.1871403698,
            "unit": "iter/sec",
            "range": "stddev: 1.0774237224793668e-7",
            "extra": "mean: 854.0780440990619 nsec\nrounds: 75752"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1637908.7969975274,
            "unit": "iter/sec",
            "range": "stddev: 7.853421983844421e-8",
            "extra": "mean: 610.5346047552302 nsec\nrounds: 156250"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 45955.45996384121,
            "unit": "iter/sec",
            "range": "stddev: 0.00001381698302383158",
            "extra": "mean: 21.760200002063357 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 272085.30991827766,
            "unit": "iter/sec",
            "range": "stddev: 2.1019276113942857e-7",
            "extra": "mean: 3.675317863725739 usec\nrounds: 48310"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "472f84538144c1a8cc7260ae67c5dad17abb32bb",
          "message": "Upgrade isort and enable black compat mode (#248)",
          "timestamp": "2021-01-05T07:23:53-08:00",
          "tree_id": "af865a041531f974faba5248eccc4d7c7b4da4a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/472f84538144c1a8cc7260ae67c5dad17abb32bb"
        },
        "date": 1609860290087,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1212069.333042283,
            "unit": "iter/sec",
            "range": "stddev: 1.6569369321869377e-7",
            "extra": "mean: 825.0353117094458 nsec\nrounds: 64936"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1627680.4769756615,
            "unit": "iter/sec",
            "range": "stddev: 3.444314843210626e-7",
            "extra": "mean: 614.3711951734326 nsec\nrounds: 126583"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 39276.989176806936,
            "unit": "iter/sec",
            "range": "stddev: 0.00001870823001630367",
            "extra": "mean: 25.46020000409044 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 313428.40761307837,
            "unit": "iter/sec",
            "range": "stddev: 3.3114950536247833e-7",
            "extra": "mean: 3.190521266452917 usec\nrounds: 35972"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fea7f7a2709b0c846934bafb27f3c1c1e415eea",
          "message": "Ensure SQLAlchemy spans have kind set to CLIENT (#278)\n\nSQLAlchemy spans were missing kind field and it was being set to\r\ninternal instead of client. This commit changes sqlalchemy spans to have\r\nkind set to \"client\" instead.",
          "timestamp": "2021-01-05T09:05:58-08:00",
          "tree_id": "52b5dfa2eb3a72e0a8e28d1b94bfa4ad3b7a485f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/9fea7f7a2709b0c846934bafb27f3c1c1e415eea"
        },
        "date": 1609866417724,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1006729.5212233989,
            "unit": "iter/sec",
            "range": "stddev: 1.4862704624567913e-7",
            "extra": "mean: 993.3154625134852 nsec\nrounds: 79366"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1369511.376639435,
            "unit": "iter/sec",
            "range": "stddev: 1.7986358828527288e-7",
            "extra": "mean: 730.1874355026114 nsec\nrounds: 116280"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 37119.52486902956,
            "unit": "iter/sec",
            "range": "stddev: 0.000019791235433724932",
            "extra": "mean: 26.940000000763575 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 232601.3818078028,
            "unit": "iter/sec",
            "range": "stddev: 3.574999094826108e-7",
            "extra": "mean: 4.299200599015763 usec\nrounds: 39063"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7",
          "message": "datadog-exporter: bugfix for unintentional type change (#261)",
          "timestamp": "2021-01-05T09:58:47-08:00",
          "tree_id": "96df3088c43358e88fbb30f54b7f94f4f87eb9c7",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7"
        },
        "date": 1609869574863,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1083110.8897209498,
            "unit": "iter/sec",
            "range": "stddev: 7.48309405966673e-7",
            "extra": "mean: 923.2664997557524 nsec\nrounds: 85471"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1368026.2723660893,
            "unit": "iter/sec",
            "range": "stddev: 0.000012980436507805183",
            "extra": "mean: 730.9801136131954 nsec\nrounds: 138889"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 55617.352619044344,
            "unit": "iter/sec",
            "range": "stddev: 0.000013031577032101833",
            "extra": "mean: 17.979999998374296 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 285199.8438025007,
            "unit": "iter/sec",
            "range": "stddev: 0.000001080309253247322",
            "extra": "mean: 3.506313280776179 usec\nrounds: 52911"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "681004+thomasdesr@users.noreply.github.com",
            "name": "Thomas Desrosiers",
            "username": "thomasdesr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21a5c164fa9539d7c39e21ffa47d9b13f8971a3b",
          "message": "Adds back retry_attempts to botocore (#275)",
          "timestamp": "2021-01-05T17:27:18-08:00",
          "tree_id": "5f82d209437b74e3e1b0e70c22d91697b8b52682",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/21a5c164fa9539d7c39e21ffa47d9b13f8971a3b"
        },
        "date": 1609896486772,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1009263.096533703,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031896328306463516",
            "extra": "mean: 990.8219208990035 nsec\nrounds: 66667"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1423146.405858938,
            "unit": "iter/sec",
            "range": "stddev: 0.000001008416159404262",
            "extra": "mean: 702.6683943992758 nsec\nrounds: 161291"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 41875.696196194316,
            "unit": "iter/sec",
            "range": "stddev: 0.000014471206246615573",
            "extra": "mean: 23.880199992731832 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 225266.81158226702,
            "unit": "iter/sec",
            "range": "stddev: 0.00003386004052858632",
            "extra": "mean: 4.439180334537659 usec\nrounds: 36765"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8abed0718471cb21462c5699a983be31d6c24c00",
          "message": "fix docker-tests build (#282)",
          "timestamp": "2021-01-06T20:39:12-08:00",
          "tree_id": "cab2e78c9d40fd9b100cc8b9f1351507bdd88767",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8abed0718471cb21462c5699a983be31d6c24c00"
        },
        "date": 1609994411889,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1155916.614986341,
            "unit": "iter/sec",
            "range": "stddev: 1.355900526577704e-7",
            "extra": "mean: 865.1143058548532 nsec\nrounds: 68028"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1607231.0166909636,
            "unit": "iter/sec",
            "range": "stddev: 1.0632631606168798e-7",
            "extra": "mean: 622.1880922002383 nsec\nrounds: 178572"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 43859.649113259286,
            "unit": "iter/sec",
            "range": "stddev: 0.000016494999242147452",
            "extra": "mean: 22.800000004963294 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 267780.8417045825,
            "unit": "iter/sec",
            "range": "stddev: 2.446189312127258e-7",
            "extra": "mean: 3.7343971048653524 usec\nrounds: 45663"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ThePumpingLemma@users.noreply.github.com",
            "name": "Dave Grochowski",
            "username": "ThePumpingLemma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb01a6bcb796fc2f9173775496d0eff3a820e08d",
          "message": "Use instanceof to check if responses are valid Response objects (#273)",
          "timestamp": "2021-01-07T18:24:19-08:00",
          "tree_id": "15354b7a8bf9b5fd800ee52ad7e564cbb694ddc8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cb01a6bcb796fc2f9173775496d0eff3a820e08d"
        },
        "date": 1610072711580,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 976332.1576068555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021157337153210407",
            "extra": "mean: 1.0242415884888583 usec\nrounds: 73530"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1319523.1100406672,
            "unit": "iter/sec",
            "range": "stddev: 0.000002464192237840418",
            "extra": "mean: 757.8495536688101 nsec\nrounds: 181819"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 29411.76470638116,
            "unit": "iter/sec",
            "range": "stddev: 0.000026332774251092253",
            "extra": "mean: 33.99999999942338 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 214590.41019520065,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037349677658326314",
            "extra": "mean: 4.660040488716887 usec\nrounds: 52632"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57b8106edc58e16aa52eced9289418b7c0850704",
          "message": "Fix AttributeError: __aexit__ for aiopg.connect and aiopg.create_pool (#235)",
          "timestamp": "2021-01-08T08:56:38-08:00",
          "tree_id": "5ebc92d214b376906a57445efd1749bead9ef8ca",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/57b8106edc58e16aa52eced9289418b7c0850704"
        },
        "date": 1610125054846,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 958251.5066292901,
            "unit": "iter/sec",
            "range": "stddev: 0.00000350357726918007",
            "extra": "mean: 1.0435673652291588 usec\nrounds: 76924"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1411891.2551612502,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013265695332144703",
            "extra": "mean: 708.2698446813394 nsec\nrounds: 172414"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 38372.98541972872,
            "unit": "iter/sec",
            "range": "stddev: 0.000016480989047573145",
            "extra": "mean: 26.059999999006322 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 220161.16149147518,
            "unit": "iter/sec",
            "range": "stddev: 0.0000037635011778291754",
            "extra": "mean: 4.542127200027153 usec\nrounds: 25000"
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
          "id": "d12f67fc31f0376440b21083f328834693ac7ee2",
          "message": "Fix ids_generator references from moving from api to sdk (#283)",
          "timestamp": "2021-01-11T12:40:38-08:00",
          "tree_id": "822aedb5e81f23fbeb4353fa99e9195203be2326",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/d12f67fc31f0376440b21083f328834693ac7ee2"
        },
        "date": 1610397704479,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1066329.2297274945,
            "unit": "iter/sec",
            "range": "stddev: 4.505769470758409e-7",
            "extra": "mean: 937.7966692852963 nsec\nrounds: 92593"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1423769.9653897337,
            "unit": "iter/sec",
            "range": "stddev: 3.993595981890142e-7",
            "extra": "mean: 702.3606511647873 nsec\nrounds: 147059"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 31191.32133345597,
            "unit": "iter/sec",
            "range": "stddev: 0.00001937937228721556",
            "extra": "mean: 32.06019999311138 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 233645.7870042564,
            "unit": "iter/sec",
            "range": "stddev: 0.000003668251228121063",
            "extra": "mean: 4.279983015408631 usec\nrounds: 29674"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c8f2785bdbc707bfe3edd969c4f021d2ea20dce",
          "message": "SQLAlchemy: Use SQL operation and DB name as the Span name (#254)\n\nCurrent instrumentation uses the entire SQL query as the operation name\r\nwhich makes traces very hard to read and understand in addition to\r\nintroducing high-cardinality issues. This commit fixes the problem by\r\nusing only the SQL operation name and the DB name instead of the entire\r\nquery.",
          "timestamp": "2021-01-20T08:41:19-08:00",
          "tree_id": "3ee47e3717a0ef9c585b079fa12f7e4daddb9d22",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8c8f2785bdbc707bfe3edd969c4f021d2ea20dce"
        },
        "date": 1611160948770,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1167808.6706578897,
            "unit": "iter/sec",
            "range": "stddev: 1.3921552404986386e-7",
            "extra": "mean: 856.3046542860878 nsec\nrounds: 75758"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1630308.3669022976,
            "unit": "iter/sec",
            "range": "stddev: 1.4263218615850032e-7",
            "extra": "mean: 613.3808918002866 nsec\nrounds: 112360"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 40915.525799441646,
            "unit": "iter/sec",
            "range": "stddev: 0.000016480330403365815",
            "extra": "mean: 24.4406000035724 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 271215.45816702925,
            "unit": "iter/sec",
            "range": "stddev: 2.9407299629447693e-7",
            "extra": "mean: 3.6871054723737227 usec\nrounds: 40001"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b9202be6f6d073f6510e37f2783c4895d344bab",
          "message": "Updated dbapi and psycopg2 instrumentations. (#246)\n\nChanges:\r\n\r\n- Update dbapi instrumentation to use the SQL statement name as the span\r\ninstead of the entire SQL query.\r\n- Renamed TracedCursor with CursorTracing. The class was not a valid\r\nCursor so the name was confusing.\r\n- Updated CursorTracing's (previously TracedCursor) traced_execution\r\nmethod to accept the cursor instance as the first argument. This is\r\nrequired as for some dbapi implementations, we need a reference to the\r\ncursor in order to correctly format the SQL query.\r\n- Updated psycopg2 instrumentation to leverage dbapi's `cursor_factory`\r\nmechanism instead of wrapping the cursor with wrapt. This results in a\r\nsimpler instrumentation without monkey patching objects at runtime and\r\nallows psycopg2's type registration system to work. This should make it\r\npossible to use psycopg2 instrumentation when using the JSONB feature or\r\nwith frameworks like Django.",
          "timestamp": "2021-01-20T10:45:28-08:00",
          "tree_id": "e93205f89443f5f5eb3513e7e53cbf66d1976ae1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8b9202be6f6d073f6510e37f2783c4895d344bab"
        },
        "date": 1611168388271,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1196765.4778412315,
            "unit": "iter/sec",
            "range": "stddev: 1.313114702592716e-7",
            "extra": "mean: 835.5856001159358 nsec\nrounds: 69445"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1663088.4953546396,
            "unit": "iter/sec",
            "range": "stddev: 1.2490682916363126e-7",
            "extra": "mean: 601.2909131373423 nsec\nrounds: 112360"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 43898.15627653773,
            "unit": "iter/sec",
            "range": "stddev: 0.000017012848082307112",
            "extra": "mean: 22.780000000466316 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 264560.9745120168,
            "unit": "iter/sec",
            "range": "stddev: 3.788396668802589e-7",
            "extra": "mean: 3.77984697797739 usec\nrounds: 40321"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3aa7a79d30713215af7a90a1c941367b0f95647",
          "message": "Update TraceState (#276)",
          "timestamp": "2021-01-20T12:13:12-08:00",
          "tree_id": "f9050e0bef079ec058c7d01624c6aad0187cd5a8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b3aa7a79d30713215af7a90a1c941367b0f95647"
        },
        "date": 1611173653929,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1014664.7883679857,
            "unit": "iter/sec",
            "range": "stddev: 4.3100892925278436e-7",
            "extra": "mean: 985.5471594795628 nsec\nrounds: 84034"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1339301.8247922596,
            "unit": "iter/sec",
            "range": "stddev: 3.6278068331415463e-7",
            "extra": "mean: 746.6576849883041 nsec\nrounds: 121952"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 39936.421205179766,
            "unit": "iter/sec",
            "range": "stddev: 0.000016868955808711768",
            "extra": "mean: 25.039800007675694 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 236951.0222057749,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012130039643055068",
            "extra": "mean: 4.220281434918529 usec\nrounds: 38023"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#287)",
          "timestamp": "2021-01-20T16:01:24-08:00",
          "tree_id": "0961312fff1a59e4fa73e69a0165a61ba9bb911b",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58"
        },
        "date": 1611187337360,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1183249.2175433622,
            "unit": "iter/sec",
            "range": "stddev: 1.1501673093154384e-7",
            "extra": "mean: 845.1304975938876 nsec\nrounds: 93450"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1585749.2597874708,
            "unit": "iter/sec",
            "range": "stddev: 1.0687175063994582e-7",
            "extra": "mean: 630.6167219236315 nsec\nrounds: 133334"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 43705.91166524311,
            "unit": "iter/sec",
            "range": "stddev: 0.000017018810483113293",
            "extra": "mean: 22.88019999809876 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 271970.0783196872,
            "unit": "iter/sec",
            "range": "stddev: 2.6583701865971636e-7",
            "extra": "mean: 3.676875067207026 usec\nrounds: 39061"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08e82a92d7bdff2074fb19a853d99063e5058b02",
          "message": "[post-release] updating version to 0.18.dev0 (#289)",
          "timestamp": "2021-01-21T09:10:30-08:00",
          "tree_id": "049cd0c1735a140711868158e4ccd46e9ffc60f0",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/08e82a92d7bdff2074fb19a853d99063e5058b02"
        },
        "date": 1611249088768,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1049066.2662560577,
            "unit": "iter/sec",
            "range": "stddev: 3.89735542282757e-7",
            "extra": "mean: 953.2286302264137 nsec\nrounds: 86957"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1457433.345560652,
            "unit": "iter/sec",
            "range": "stddev: 3.3808538014854735e-7",
            "extra": "mean: 686.137724957374 nsec\nrounds: 149254"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 41910.44575892035,
            "unit": "iter/sec",
            "range": "stddev: 0.00001491581846271855",
            "extra": "mean: 23.86040000033063 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 246740.52892899566,
            "unit": "iter/sec",
            "range": "stddev: 8.784503900654488e-7",
            "extra": "mean: 4.052840465004309 usec\nrounds: 36901"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3a078296c098d861a2e70795404a1e5938d44cc",
          "message": "Added Zoom passcode (#295)",
          "timestamp": "2021-01-26T08:15:47-08:00",
          "tree_id": "ba9b86df7270b95a084ae310f92e9b726eeb0634",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f3a078296c098d861a2e70795404a1e5938d44cc"
        },
        "date": 1611677822336,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1315566.1566328455,
            "unit": "iter/sec",
            "range": "stddev: 3.5315605396673426e-7",
            "extra": "mean: 760.1290098245395 nsec\nrounds: 102031"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1671356.069556988,
            "unit": "iter/sec",
            "range": "stddev: 3.932210711056054e-7",
            "extra": "mean: 598.3165515802157 nsec\nrounds: 105253"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 49014.80248102193,
            "unit": "iter/sec",
            "range": "stddev: 0.000014579648541026737",
            "extra": "mean: 20.401999995556253 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 280988.00196766836,
            "unit": "iter/sec",
            "range": "stddev: 8.907790457735791e-7",
            "extra": "mean: 3.5588708165377967 usec\nrounds: 39680"
          }
        ]
      },
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
          "id": "c9075cf1f22341b3d6e8c298de93cbb344450aca",
          "message": "Add readTheDocs (#252)\n\nCo-authored-by: Aaron Abbott <aaronabbott@google.com>\r\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-26T09:06:39-08:00",
          "tree_id": "8b86f1c8f9aba2a680890ffa3666177f0aee73ba",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/c9075cf1f22341b3d6e8c298de93cbb344450aca"
        },
        "date": 1611680878214,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1127871.8475596171,
            "unit": "iter/sec",
            "range": "stddev: 3.9485759561743634e-7",
            "extra": "mean: 886.6255525073224 nsec\nrounds: 76924"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1525158.5614832942,
            "unit": "iter/sec",
            "range": "stddev: 3.100484924803776e-7",
            "extra": "mean: 655.6695318468717 nsec\nrounds: 114943"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 40882.7401232183,
            "unit": "iter/sec",
            "range": "stddev: 0.000015998113018342875",
            "extra": "mean: 24.460200000930854 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 267867.1017287109,
            "unit": "iter/sec",
            "range": "stddev: 8.507733142042565e-7",
            "extra": "mean: 3.733194533955031 usec\nrounds: 40651"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f279d396231ceb9e08429443234db6e9d4d6d437",
          "message": "updating readme (#296)\n\nAdding more details to the readme including a link to the read the docs",
          "timestamp": "2021-01-26T09:35:37-08:00",
          "tree_id": "18d08ec0e004137fd205213222edf4160c7bce83",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f279d396231ceb9e08429443234db6e9d4d6d437"
        },
        "date": 1611682577913,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1139686.1062136907,
            "unit": "iter/sec",
            "range": "stddev: 1.270458254207021e-7",
            "extra": "mean: 877.4345800548879 nsec\nrounds: 78126"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1654840.4671021358,
            "unit": "iter/sec",
            "range": "stddev: 9.11320811870549e-8",
            "extra": "mean: 604.2878572767466 nsec\nrounds: 123457"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 43177.892912326606,
            "unit": "iter/sec",
            "range": "stddev: 0.000018128513447172542",
            "extra": "mean: 23.160000003485948 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 266621.0358843326,
            "unit": "iter/sec",
            "range": "stddev: 3.921724209639499e-7",
            "extra": "mean: 3.7506417926972087 usec\nrounds: 36102"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc260c748d468a3f2f5c9657c23aee848e6e7eb",
          "message": "update python version for readthedocs (#297)",
          "timestamp": "2021-01-26T09:51:37-08:00",
          "tree_id": "bf7cd69d2f07891fde7b65f79a8275e1aec57236",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/fcc260c748d468a3f2f5c9657c23aee848e6e7eb"
        },
        "date": 1611683544238,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 961775.9498247153,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027900824543376352",
            "extra": "mean: 1.0397431960970236 usec\nrounds: 55556"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1247229.6405239543,
            "unit": "iter/sec",
            "range": "stddev: 0.00000464352142738837",
            "extra": "mean: 801.7769683375273 nsec\nrounds: 128206"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 36205.38590828907,
            "unit": "iter/sec",
            "range": "stddev: 0.000018562141318147027",
            "extra": "mean: 27.62020000375287 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 212548.38757585373,
            "unit": "iter/sec",
            "range": "stddev: 0.000008774061963425853",
            "extra": "mean: 4.704811038113016 usec\nrounds: 46729"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "theegrandmaster@gmail.com",
            "name": "M.J",
            "username": "theelous3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c",
          "message": "Aiohttp instrumentation readme (#286)",
          "timestamp": "2021-01-28T09:12:31-08:00",
          "tree_id": "84870866cf1256c3930a9b9f445c1dfe00efadd8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c"
        },
        "date": 1611854015118,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 994086.3979261898,
            "unit": "iter/sec",
            "range": "stddev: 5.959991239459473e-7",
            "extra": "mean: 1.0059487807962635 usec\nrounds: 63687"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1311379.9701744842,
            "unit": "iter/sec",
            "range": "stddev: 3.0465365837476073e-7",
            "extra": "mean: 762.5554932541376 nsec\nrounds: 112347"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 40188.403239503445,
            "unit": "iter/sec",
            "range": "stddev: 0.000017016087776402586",
            "extra": "mean: 24.882799996817084 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 234275.4155882179,
            "unit": "iter/sec",
            "range": "stddev: 0.000008555854864180026",
            "extra": "mean: 4.268480316166352 usec\nrounds: 38458"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f022385e37d14f5baadda2292a1115ef244b7523",
          "message": "update references to main (#306)",
          "timestamp": "2021-01-29T12:09:22-08:00",
          "tree_id": "b5abf4db59338681d5cfa6418f374bbb6cc38789",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f022385e37d14f5baadda2292a1115ef244b7523"
        },
        "date": 1611951045377,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1041557.0924018737,
            "unit": "iter/sec",
            "range": "stddev: 4.222483342799155e-7",
            "extra": "mean: 960.1009942661508 nsec\nrounds: 65786"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1353633.8389518787,
            "unit": "iter/sec",
            "range": "stddev: 4.350970147301051e-7",
            "extra": "mean: 738.7522173457942 nsec\nrounds: 108684"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 41629.893575286995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000148996691095936",
            "extra": "mean: 24.02120001079311 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 240140.67409918073,
            "unit": "iter/sec",
            "range": "stddev: 9.220180888924057e-7",
            "extra": "mean: 4.1642258386723325 usec\nrounds: 42734"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0adb23143e56dffc3face697b17349dd3281f56",
          "message": "Remove 'component' span attribute in instrumentations (#301)",
          "timestamp": "2021-01-29T13:15:26-08:00",
          "tree_id": "4661d9ccf175efe020f4f9afe15b86d61eb89b14",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f0adb23143e56dffc3face697b17349dd3281f56"
        },
        "date": 1611954975480,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1067781.028440453,
            "unit": "iter/sec",
            "range": "stddev: 0.000003618038772076464",
            "extra": "mean: 936.5216026178603 nsec\nrounds: 86957"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1448376.451276379,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034102861514034444",
            "extra": "mean: 690.4282371608238 nsec\nrounds: 153847"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 36873.15634021688,
            "unit": "iter/sec",
            "range": "stddev: 0.00001903213072556997",
            "extra": "mean: 27.120000001445987 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 219812.81641250962,
            "unit": "iter/sec",
            "range": "stddev: 0.000006532761132289615",
            "extra": "mean: 4.549325268292635 usec\nrounds: 50506"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fd68a2bf9b91f00bd30f47b4aac84e0052af034",
          "message": "Remove Configuration from instrumentations (#285)",
          "timestamp": "2021-02-04T08:02:37-08:00",
          "tree_id": "bdd0d76071a8dc726d87e3d7837280caa60fab24",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2fd68a2bf9b91f00bd30f47b4aac84e0052af034"
        },
        "date": 1612454610636,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1351842.011410349,
            "unit": "iter/sec",
            "range": "stddev: 3.566755114927707e-7",
            "extra": "mean: 739.7314120728654 nsec\nrounds: 104167"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1876947.8563520017,
            "unit": "iter/sec",
            "range": "stddev: 1.1132759602234581e-7",
            "extra": "mean: 532.779851403853 nsec\nrounds: 135136"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 48496.60524242726,
            "unit": "iter/sec",
            "range": "stddev: 0.00001607053203498687",
            "extra": "mean: 20.619999997961713 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 309657.024981768,
            "unit": "iter/sec",
            "range": "stddev: 2.6950627796917973e-7",
            "extra": "mean: 3.2293793433521425 usec\nrounds: 43860"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b016f6f774225065dc5fc3e5df0f7858827a07ea",
          "message": "update requirements for snappy (#314)",
          "timestamp": "2021-02-04T15:10:10-08:00",
          "tree_id": "8e066a24cd6aa230b9dc9dfc6bf9a1dc7f37b483",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b016f6f774225065dc5fc3e5df0f7858827a07ea"
        },
        "date": 1612480259672,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1112918.4057505706,
            "unit": "iter/sec",
            "range": "stddev: 4.212847537064784e-7",
            "extra": "mean: 898.5384686180864 nsec\nrounds: 64936"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1473044.911029742,
            "unit": "iter/sec",
            "range": "stddev: 4.24199493252868e-7",
            "extra": "mean: 678.8659276524997 nsec\nrounds: 135136"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 33422.459892979976,
            "unit": "iter/sec",
            "range": "stddev: 0.000019691038571344898",
            "extra": "mean: 29.92000000006101 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 249382.97125533654,
            "unit": "iter/sec",
            "range": "stddev: 0.000010609740556550942",
            "extra": "mean: 4.0098968865685976 usec\nrounds: 40984"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53b9a012f76c4fc883c3c245fddc29142706d0d",
          "message": "Fix failing aiopg tests (#317)",
          "timestamp": "2021-02-04T17:39:24-08:00",
          "tree_id": "6e0ed7b51c1d7108b87c3ec62a8ff3ae6a154fe8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b53b9a012f76c4fc883c3c245fddc29142706d0d"
        },
        "date": 1612489212824,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 997661.3791874074,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016107419533468788",
            "extra": "mean: 1.0023441027801412 usec\nrounds: 62894"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1188336.3985402626,
            "unit": "iter/sec",
            "range": "stddev: 0.000019870875308430136",
            "extra": "mean: 841.5125558961143 nsec\nrounds: 125001"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 36603.22108600248,
            "unit": "iter/sec",
            "range": "stddev: 0.000018028089196343353",
            "extra": "mean: 27.319999998098865 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 215407.26560851806,
            "unit": "iter/sec",
            "range": "stddev: 0.000011654208326560759",
            "extra": "mean: 4.642368943197133 usec\nrounds: 44248"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31176812+garnertan@users.noreply.github.com",
            "name": "Garner Jervis Tan",
            "username": "garnertan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55efeb6063e2704b70c46290e005cb2278f3dbd4",
          "message": "Case insensitive header key retrieval for asgi instrumentation (#308)",
          "timestamp": "2021-02-05T08:51:06-08:00",
          "tree_id": "1d412776f2f4d7bea57e1f80bafa6b4317361bb4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/55efeb6063e2704b70c46290e005cb2278f3dbd4"
        },
        "date": 1612543910408,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 979199.9394936796,
            "unit": "iter/sec",
            "range": "stddev: 1.5667340534174394e-7",
            "extra": "mean: 1.021241893169515 usec\nrounds: 78113"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1332033.7899623958,
            "unit": "iter/sec",
            "range": "stddev: 3.654098376028025e-7",
            "extra": "mean: 750.7317063092149 nsec\nrounds: 147059"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 39211.99573627952,
            "unit": "iter/sec",
            "range": "stddev: 0.000018936512461847595",
            "extra": "mean: 25.502399998345027 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 231143.43601316836,
            "unit": "iter/sec",
            "range": "stddev: 2.9964219177044625e-7",
            "extra": "mean: 4.3263179662304125 usec\nrounds: 36897"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ade29f692bb7d0ab23aad638f9503bf6dbaec507",
          "message": "gRPC instrumentation: client additions (#269)\n\nThe docs on metric labels suggests that they should probably be strings,\r\nand all others I can find are strings, and so these ought to be also.\r\nOtherwise, some of the exporters/processors have to handle things\r\nspecifically, and not all of these come out as nice as could be when you\r\n`str()` them.\r\n\r\nI've also made sure to use the `StatusCode` name, as that's the\r\ninteresting thing.\r\n\r\nFinally, there's no need to report specifically that `error=false`, so\r\nI've removed that tag.",
          "timestamp": "2021-02-05T09:09:57-08:00",
          "tree_id": "0ba0a2485e59a499caa935b144abe3b86fa2ac9c",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/ade29f692bb7d0ab23aad638f9503bf6dbaec507"
        },
        "date": 1612545040858,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 1148837.4617820666,
            "unit": "iter/sec",
            "range": "stddev: 1.3123633797616206e-7",
            "extra": "mean: 870.4451528319843 nsec\nrounds: 79366"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 1621092.5310396012,
            "unit": "iter/sec",
            "range": "stddev: 1.1900715036104474e-7",
            "extra": "mean: 616.8679337253521 nsec\nrounds: 153847"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 44882.0947349746,
            "unit": "iter/sec",
            "range": "stddev: 0.00001523432407750741",
            "extra": "mean: 22.280600001067796 usec\nrounds: 5"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 276017.0995288955,
            "unit": "iter/sec",
            "range": "stddev: 2.8051798173556114e-7",
            "extra": "mean: 3.6229639457366756 usec\nrounds: 41493"
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
      },
      {
        "commit": {
          "author": {
            "email": "moaddib666@gmail.com",
            "name": "Max Nikitenko",
            "username": "moaddib666"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "187987d9ccc359ca2b1e72cfafd10d184c3ab655",
          "message": "Feature/urllib instrumentation (#222)",
          "timestamp": "2020-12-15T10:11:33-08:00",
          "tree_id": "0b35fa021a647e4c9db902738c9ab8f2cbaa2d59",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/187987d9ccc359ca2b1e72cfafd10d184c3ab655"
        },
        "date": 1608055985021,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3739565.469679073,
            "unit": "iter/sec",
            "range": "stddev: 4.518118794095487e-8",
            "extra": "mean: 267.41074814926526 nsec\nrounds: 44844"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7328441.207402364,
            "unit": "iter/sec",
            "range": "stddev: 3.667526583918071e-8",
            "extra": "mean: 136.4546663742418 nsec\nrounds: 93458"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 560357.0129155223,
            "unit": "iter/sec",
            "range": "stddev: 0.000004945238331605446",
            "extra": "mean: 1.7845765769880018 usec\nrounds: 65790"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2661062.7066546422,
            "unit": "iter/sec",
            "range": "stddev: 6.209994325441051e-7",
            "extra": "mean: 375.7897164539768 nsec\nrounds: 196079"
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
          "id": "65801c31d8eba6c3625c29d610b67a97ed547a31",
          "message": "Fix requests and urllib instrumentations span name callback parameters (#259)",
          "timestamp": "2020-12-16T08:17:23-08:00",
          "tree_id": "595b2219804af9c1545baf22673099f5ac2b41e4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/65801c31d8eba6c3625c29d610b67a97ed547a31"
        },
        "date": 1608135503671,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4391574.911361421,
            "unit": "iter/sec",
            "range": "stddev: 3.8042888733144745e-8",
            "extra": "mean: 227.70874234955295 nsec\nrounds: 49998"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8283424.935697847,
            "unit": "iter/sec",
            "range": "stddev: 3.151434932676393e-8",
            "extra": "mean: 120.72301104466982 nsec\nrounds: 102041"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 592899.1982096618,
            "unit": "iter/sec",
            "range": "stddev: 5.205451232255539e-7",
            "extra": "mean: 1.686627344107828 usec\nrounds: 67115"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2861570.621883024,
            "unit": "iter/sec",
            "range": "stddev: 4.991701756732588e-7",
            "extra": "mean: 349.4584380873845 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "azfaarq@amazon.com",
            "name": "Azfaar Qureshi",
            "username": "AzfaarQureshi"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f6f5b90aeb181bf24a4c64f34e74012b5b246e51",
          "message": "Prometheus Remote Write Exporter (6/6) (#227)\n\n* adding README\r\n\r\nadding sample app\r\n\r\nadding examples readme\r\n\r\nfixing lint errors\r\n\r\nlinting examples\r\n\r\nupdating readme tls_config example\r\n\r\nexcluding examples\r\n\r\nadding examples to exclude in all linters\r\n\r\nadding isort.cfg skip\r\n\r\nchanging isort to path\r\n\r\nignoring yml only\r\n\r\nadding it to excluded directories in pylintrc\r\n\r\nonly adding exclude to directory\r\n\r\nremoving readme.rst and adding explicit file names to ignore\r\n\r\nadding the rest of the files\r\n\r\nadding readme.rst back\r\n\r\nadding to ignore glob instead\r\n\r\nreverting back to ignore list\r\n\r\nconverting README.md to README.rst\r\n\r\n* addressing readme comments\r\n\r\n* adding link to spec for details on aggregators\r\n\r\n* updating readme\r\n\r\n* adding python-snappy to setup.cfg",
          "timestamp": "2020-12-22T11:06:22-08:00",
          "tree_id": "4478cadeaead5e63e0e180f5d1fe3a78d0046e1d",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f6f5b90aeb181bf24a4c64f34e74012b5b246e51"
        },
        "date": 1608664082739,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3498299.971130941,
            "unit": "iter/sec",
            "range": "stddev: 2.7093677154729674e-7",
            "extra": "mean: 285.85313102145284 nsec\nrounds: 46512"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7326825.701325484,
            "unit": "iter/sec",
            "range": "stddev: 2.2146537335130997e-7",
            "extra": "mean: 136.48475352963737 nsec\nrounds: 108696"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 456038.7274827339,
            "unit": "iter/sec",
            "range": "stddev: 0.0000063278506436670476",
            "extra": "mean: 2.1927962248290607 usec\nrounds: 64103"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2523890.5547374636,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015833180435069503",
            "extra": "mean: 396.213694022133 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adamantike@users.noreply.github.com",
            "name": "Michael Manganiello",
            "username": "adamantike"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9ea61cfd8a991adec22325f28357f9ff02ef32f",
          "message": "Celery: Add support for new major version 5.x (#266)",
          "timestamp": "2020-12-22T15:48:23-08:00",
          "tree_id": "d2f04b14c3bbff2f7f897e71e3501154087dbaa8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f9ea61cfd8a991adec22325f28357f9ff02ef32f"
        },
        "date": 1608680997357,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3435430.5172951594,
            "unit": "iter/sec",
            "range": "stddev: 4.959721479715813e-7",
            "extra": "mean: 291.0843327977686 nsec\nrounds: 44844"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7594493.221119342,
            "unit": "iter/sec",
            "range": "stddev: 8.149313933653928e-8",
            "extra": "mean: 131.67435546837643 nsec\nrounds: 98040"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 454355.5317758562,
            "unit": "iter/sec",
            "range": "stddev: 0.000002729009738959654",
            "extra": "mean: 2.2009196104457467 usec\nrounds: 68489"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2503526.5625032424,
            "unit": "iter/sec",
            "range": "stddev: 9.89899794639995e-7",
            "extra": "mean: 399.4365448231981 nsec\nrounds: 188680"
          }
        ]
      },
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
          "id": "cfaa2b7fff6121d52fc2deb74a9558d75cb1197f",
          "message": "Set max number of commits in performance graph (#270)",
          "timestamp": "2020-12-22T16:32:58-08:00",
          "tree_id": "24384fa664e8f32dfa4e748ae5f0febbdee064a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cfaa2b7fff6121d52fc2deb74a9558d75cb1197f"
        },
        "date": 1608683651178,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3861049.527086512,
            "unit": "iter/sec",
            "range": "stddev: 1.3996004893812756e-7",
            "extra": "mean: 258.9969367097579 nsec\nrounds: 47622"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8166322.1441254625,
            "unit": "iter/sec",
            "range": "stddev: 1.9421770776396564e-7",
            "extra": "mean: 122.45414549553875 nsec\nrounds: 106395"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 556794.4655032252,
            "unit": "iter/sec",
            "range": "stddev: 0.000006857952754695672",
            "extra": "mean: 1.7959948633760088 usec\nrounds: 70922"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3197789.689604552,
            "unit": "iter/sec",
            "range": "stddev: 7.217529212930477e-7",
            "extra": "mean: 312.715999820681 nsec\nrounds: 196117"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "shovnik@amazon.com",
            "name": "Shovnik Bhattacharya",
            "username": "shovnik"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df79be6ea935073ba94c80f19ecd4360565ef36b",
          "message": "Add CodeQL analysis (#277)",
          "timestamp": "2020-12-31T12:52:03-08:00",
          "tree_id": "2465c1d4e58cc81e70324a35aba97ba2225a6fbd",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/df79be6ea935073ba94c80f19ecd4360565ef36b"
        },
        "date": 1609447992207,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3875404.618702753,
            "unit": "iter/sec",
            "range": "stddev: 5.421896139299539e-7",
            "extra": "mean: 258.0375724315359 nsec\nrounds: 50252"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7862186.63565355,
            "unit": "iter/sec",
            "range": "stddev: 1.533586238831249e-7",
            "extra": "mean: 127.19107881074318 nsec\nrounds: 105264"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 558498.1866534989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024009519176337716",
            "extra": "mean: 1.7905161089097965 usec\nrounds: 79366"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2874201.0783377765,
            "unit": "iter/sec",
            "range": "stddev: 3.749593087312052e-7",
            "extra": "mean: 347.92276975218533 nsec\nrounds: 35588"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "472f84538144c1a8cc7260ae67c5dad17abb32bb",
          "message": "Upgrade isort and enable black compat mode (#248)",
          "timestamp": "2021-01-05T07:23:53-08:00",
          "tree_id": "af865a041531f974faba5248eccc4d7c7b4da4a1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/472f84538144c1a8cc7260ae67c5dad17abb32bb"
        },
        "date": 1609860318378,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4035670.922997355,
            "unit": "iter/sec",
            "range": "stddev: 1.4231846413574516e-7",
            "extra": "mean: 247.79027306252252 nsec\nrounds: 46949"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8661843.91220032,
            "unit": "iter/sec",
            "range": "stddev: 3.1352793836244705e-7",
            "extra": "mean: 115.44885940413401 nsec\nrounds: 106383"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 591919.6457645774,
            "unit": "iter/sec",
            "range": "stddev: 0.000006031159780534617",
            "extra": "mean: 1.6894184998850328 usec\nrounds: 67568"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3198905.2144440142,
            "unit": "iter/sec",
            "range": "stddev: 6.02767126938087e-7",
            "extra": "mean: 312.6069492409242 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9fea7f7a2709b0c846934bafb27f3c1c1e415eea",
          "message": "Ensure SQLAlchemy spans have kind set to CLIENT (#278)\n\nSQLAlchemy spans were missing kind field and it was being set to\r\ninternal instead of client. This commit changes sqlalchemy spans to have\r\nkind set to \"client\" instead.",
          "timestamp": "2021-01-05T09:05:58-08:00",
          "tree_id": "52b5dfa2eb3a72e0a8e28d1b94bfa4ad3b7a485f",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/9fea7f7a2709b0c846934bafb27f3c1c1e415eea"
        },
        "date": 1609866432408,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3871500.9237532597,
            "unit": "iter/sec",
            "range": "stddev: 4.9483185252108686e-8",
            "extra": "mean: 258.2977557526797 nsec\nrounds: 60234"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7641440.615656756,
            "unit": "iter/sec",
            "range": "stddev: 3.873672276634758e-8",
            "extra": "mean: 130.86537608512364 nsec\nrounds: 124985"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 577085.4339501337,
            "unit": "iter/sec",
            "range": "stddev: 0.0000055957344853086504",
            "extra": "mean: 1.7328456779007726 usec\nrounds: 87712"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2919348.161819742,
            "unit": "iter/sec",
            "range": "stddev: 5.26010265196304e-7",
            "extra": "mean: 342.54221989632606 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7",
          "message": "datadog-exporter: bugfix for unintentional type change (#261)",
          "timestamp": "2021-01-05T09:58:47-08:00",
          "tree_id": "96df3088c43358e88fbb30f54b7f94f4f87eb9c7",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5a6c4f6fd2f059b115d3ad0bbabd7c239612efa7"
        },
        "date": 1609869596600,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3858439.3209852963,
            "unit": "iter/sec",
            "range": "stddev: 5.052816115923299e-8",
            "extra": "mean: 259.1721462512811 nsec\nrounds: 45046"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7232983.858907259,
            "unit": "iter/sec",
            "range": "stddev: 4.3335574446199184e-8",
            "extra": "mean: 138.2555276641517 nsec\nrounds: 91744"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 544776.5291261228,
            "unit": "iter/sec",
            "range": "stddev: 5.041706855192832e-7",
            "extra": "mean: 1.8356150578001267 usec\nrounds: 73530"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2665292.8848818955,
            "unit": "iter/sec",
            "range": "stddev: 6.567360356428217e-7",
            "extra": "mean: 375.1932876391382 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "681004+thomasdesr@users.noreply.github.com",
            "name": "Thomas Desrosiers",
            "username": "thomasdesr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "21a5c164fa9539d7c39e21ffa47d9b13f8971a3b",
          "message": "Adds back retry_attempts to botocore (#275)",
          "timestamp": "2021-01-05T17:27:18-08:00",
          "tree_id": "5f82d209437b74e3e1b0e70c22d91697b8b52682",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/21a5c164fa9539d7c39e21ffa47d9b13f8971a3b"
        },
        "date": 1609896498798,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3731917.4940936067,
            "unit": "iter/sec",
            "range": "stddev: 3.98597987825829e-8",
            "extra": "mean: 267.95876424991644 nsec\nrounds: 41667"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7227364.381691414,
            "unit": "iter/sec",
            "range": "stddev: 3.453823675390344e-8",
            "extra": "mean: 138.36302518969956 nsec\nrounds: 90910"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 569434.512243819,
            "unit": "iter/sec",
            "range": "stddev: 8.627748462073313e-7",
            "extra": "mean: 1.7561281912112383 usec\nrounds: 65790"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2779912.2792060315,
            "unit": "iter/sec",
            "range": "stddev: 5.586355458298071e-7",
            "extra": "mean: 359.7235810208734 nsec\nrounds: 181819"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8abed0718471cb21462c5699a983be31d6c24c00",
          "message": "fix docker-tests build (#282)",
          "timestamp": "2021-01-06T20:39:12-08:00",
          "tree_id": "cab2e78c9d40fd9b100cc8b9f1351507bdd88767",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8abed0718471cb21462c5699a983be31d6c24c00"
        },
        "date": 1609994432578,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4335040.433418073,
            "unit": "iter/sec",
            "range": "stddev: 4.692195312158631e-8",
            "extra": "mean: 230.67835591361057 nsec\nrounds: 60599"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8568734.398536665,
            "unit": "iter/sec",
            "range": "stddev: 3.6310979249173876e-8",
            "extra": "mean: 116.70334888321537 nsec\nrounds: 105253"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 674981.1448233036,
            "unit": "iter/sec",
            "range": "stddev: 3.979028716847452e-7",
            "extra": "mean: 1.4815228657413182 usec\nrounds: 87712"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3224668.184402755,
            "unit": "iter/sec",
            "range": "stddev: 2.379882201050303e-7",
            "extra": "mean: 310.1094260912965 nsec\nrounds: 40320"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ThePumpingLemma@users.noreply.github.com",
            "name": "Dave Grochowski",
            "username": "ThePumpingLemma"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb01a6bcb796fc2f9173775496d0eff3a820e08d",
          "message": "Use instanceof to check if responses are valid Response objects (#273)",
          "timestamp": "2021-01-07T18:24:19-08:00",
          "tree_id": "15354b7a8bf9b5fd800ee52ad7e564cbb694ddc8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/cb01a6bcb796fc2f9173775496d0eff3a820e08d"
        },
        "date": 1610072722314,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3703873.7369643976,
            "unit": "iter/sec",
            "range": "stddev: 4.305351281160417e-8",
            "extra": "mean: 269.9876051443171 nsec\nrounds: 45247"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7288281.995989359,
            "unit": "iter/sec",
            "range": "stddev: 3.664993043015044e-8",
            "extra": "mean: 137.20654614489303 nsec\nrounds: 90910"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 542764.2274412591,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010666500163850297",
            "extra": "mean: 1.8424206118267328 usec\nrounds: 67568"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2704621.9390382525,
            "unit": "iter/sec",
            "range": "stddev: 6.023701837966177e-7",
            "extra": "mean: 369.73744299212706 nsec\nrounds: 185186"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "57b8106edc58e16aa52eced9289418b7c0850704",
          "message": "Fix AttributeError: __aexit__ for aiopg.connect and aiopg.create_pool (#235)",
          "timestamp": "2021-01-08T08:56:38-08:00",
          "tree_id": "5ebc92d214b376906a57445efd1749bead9ef8ca",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/57b8106edc58e16aa52eced9289418b7c0850704"
        },
        "date": 1610125063965,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3770946.341791468,
            "unit": "iter/sec",
            "range": "stddev: 1.0342911873910239e-7",
            "extra": "mean: 265.1854227989827 nsec\nrounds: 44844"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7720527.466518775,
            "unit": "iter/sec",
            "range": "stddev: 5.367528958228876e-8",
            "extra": "mean: 129.52482901419233 nsec\nrounds: 93458"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 549926.1971812209,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012335886049883196",
            "extra": "mean: 1.818425827185068 usec\nrounds: 64103"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2708664.6409744103,
            "unit": "iter/sec",
            "range": "stddev: 5.966449635668231e-7",
            "extra": "mean: 369.1856071336853 nsec\nrounds: 192308"
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
          "id": "d12f67fc31f0376440b21083f328834693ac7ee2",
          "message": "Fix ids_generator references from moving from api to sdk (#283)",
          "timestamp": "2021-01-11T12:40:38-08:00",
          "tree_id": "822aedb5e81f23fbeb4353fa99e9195203be2326",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/d12f67fc31f0376440b21083f328834693ac7ee2"
        },
        "date": 1610397717005,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4471180.879824105,
            "unit": "iter/sec",
            "range": "stddev: 3.4311809055259296e-8",
            "extra": "mean: 223.65456170925964 nsec\nrounds: 50001"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8713890.656005444,
            "unit": "iter/sec",
            "range": "stddev: 2.8567077087557804e-8",
            "extra": "mean: 114.75930092267271 nsec\nrounds: 103093"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 637879.8928666204,
            "unit": "iter/sec",
            "range": "stddev: 9.63804987724686e-7",
            "extra": "mean: 1.5676932463037936 usec\nrounds: 72464"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3191187.7254088884,
            "unit": "iter/sec",
            "range": "stddev: 5.308228023391733e-7",
            "extra": "mean: 313.3629501135247 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c8f2785bdbc707bfe3edd969c4f021d2ea20dce",
          "message": "SQLAlchemy: Use SQL operation and DB name as the Span name (#254)\n\nCurrent instrumentation uses the entire SQL query as the operation name\r\nwhich makes traces very hard to read and understand in addition to\r\nintroducing high-cardinality issues. This commit fixes the problem by\r\nusing only the SQL operation name and the DB name instead of the entire\r\nquery.",
          "timestamp": "2021-01-20T08:41:19-08:00",
          "tree_id": "3ee47e3717a0ef9c585b079fa12f7e4daddb9d22",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8c8f2785bdbc707bfe3edd969c4f021d2ea20dce"
        },
        "date": 1611160981830,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4081360.2189694946,
            "unit": "iter/sec",
            "range": "stddev: 4.981238280824272e-8",
            "extra": "mean: 245.01635394790014 nsec\nrounds: 52081"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8541631.881727476,
            "unit": "iter/sec",
            "range": "stddev: 3.825999650221206e-8",
            "extra": "mean: 117.07364750045136 nsec\nrounds: 121952"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 613949.1141033453,
            "unit": "iter/sec",
            "range": "stddev: 4.2212839656872634e-7",
            "extra": "mean: 1.6287994835866246 usec\nrounds: 87720"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3014548.055581227,
            "unit": "iter/sec",
            "range": "stddev: 2.694157839965752e-7",
            "extra": "mean: 331.7246836216739 nsec\nrounds: 37313"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "owais@users.noreply.github.com",
            "name": "Owais Lone",
            "username": "owais"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8b9202be6f6d073f6510e37f2783c4895d344bab",
          "message": "Updated dbapi and psycopg2 instrumentations. (#246)\n\nChanges:\r\n\r\n- Update dbapi instrumentation to use the SQL statement name as the span\r\ninstead of the entire SQL query.\r\n- Renamed TracedCursor with CursorTracing. The class was not a valid\r\nCursor so the name was confusing.\r\n- Updated CursorTracing's (previously TracedCursor) traced_execution\r\nmethod to accept the cursor instance as the first argument. This is\r\nrequired as for some dbapi implementations, we need a reference to the\r\ncursor in order to correctly format the SQL query.\r\n- Updated psycopg2 instrumentation to leverage dbapi's `cursor_factory`\r\nmechanism instead of wrapping the cursor with wrapt. This results in a\r\nsimpler instrumentation without monkey patching objects at runtime and\r\nallows psycopg2's type registration system to work. This should make it\r\npossible to use psycopg2 instrumentation when using the JSONB feature or\r\nwith frameworks like Django.",
          "timestamp": "2021-01-20T10:45:28-08:00",
          "tree_id": "e93205f89443f5f5eb3513e7e53cbf66d1976ae1",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/8b9202be6f6d073f6510e37f2783c4895d344bab"
        },
        "date": 1611168409106,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4010989.5939788097,
            "unit": "iter/sec",
            "range": "stddev: 6.733583684324094e-8",
            "extra": "mean: 249.31503225575497 nsec\nrounds: 52084"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7525890.711302423,
            "unit": "iter/sec",
            "range": "stddev: 6.093481461952112e-8",
            "extra": "mean: 132.87463748288712 nsec\nrounds: 105264"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 563464.3516762647,
            "unit": "iter/sec",
            "range": "stddev: 0.000005965429470073063",
            "extra": "mean: 1.774735166519521 usec\nrounds: 75188"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2863654.4378251936,
            "unit": "iter/sec",
            "range": "stddev: 6.640864454806914e-7",
            "extra": "mean: 349.20414516191335 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "srikanth.chekuri92@gmail.com",
            "name": "Srikanth Chekuri",
            "username": "lonewolf3739"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b3aa7a79d30713215af7a90a1c941367b0f95647",
          "message": "Update TraceState (#276)",
          "timestamp": "2021-01-20T12:13:12-08:00",
          "tree_id": "f9050e0bef079ec058c7d01624c6aad0187cd5a8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b3aa7a79d30713215af7a90a1c941367b0f95647"
        },
        "date": 1611173680112,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3769336.8621093277,
            "unit": "iter/sec",
            "range": "stddev: 4.111153767927672e-8",
            "extra": "mean: 265.29865506379656 nsec\nrounds: 51021"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7477564.655176832,
            "unit": "iter/sec",
            "range": "stddev: 3.7446163470477203e-8",
            "extra": "mean: 133.73338060105993 nsec\nrounds: 92593"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 508971.12383599917,
            "unit": "iter/sec",
            "range": "stddev: 0.000006600694617056755",
            "extra": "mean: 1.964748004686865 usec\nrounds: 71943"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2654426.895535118,
            "unit": "iter/sec",
            "range": "stddev: 5.736833895171384e-7",
            "extra": "mean: 376.7291544861459 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58",
          "message": "[pre-release] Update changelogs, version [0.17b0] (#287)",
          "timestamp": "2021-01-20T16:01:24-08:00",
          "tree_id": "0961312fff1a59e4fa73e69a0165a61ba9bb911b",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2a11aeeafa1815e39f28dd62e7d6e7cf0b171e58"
        },
        "date": 1611187361134,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4348038.613506794,
            "unit": "iter/sec",
            "range": "stddev: 3.322123397741666e-8",
            "extra": "mean: 229.98875789504277 nsec\nrounds: 50503"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8440044.297036897,
            "unit": "iter/sec",
            "range": "stddev: 2.7736333118378242e-8",
            "extra": "mean: 118.48279046959655 nsec\nrounds: 103083"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 626114.7443479653,
            "unit": "iter/sec",
            "range": "stddev: 0.00000537553127810206",
            "extra": "mean: 1.5971513353217848 usec\nrounds: 75188"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3047445.4657132467,
            "unit": "iter/sec",
            "range": "stddev: 4.160761311914593e-7",
            "extra": "mean: 328.14368993653324 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "08e82a92d7bdff2074fb19a853d99063e5058b02",
          "message": "[post-release] updating version to 0.18.dev0 (#289)",
          "timestamp": "2021-01-21T09:10:30-08:00",
          "tree_id": "049cd0c1735a140711868158e4ccd46e9ffc60f0",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/08e82a92d7bdff2074fb19a853d99063e5058b02"
        },
        "date": 1611249105689,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4441493.104757842,
            "unit": "iter/sec",
            "range": "stddev: 4.228614821641823e-8",
            "extra": "mean: 225.1495108545078 nsec\nrounds: 50762"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8689678.892129932,
            "unit": "iter/sec",
            "range": "stddev: 4.37073128956603e-8",
            "extra": "mean: 115.07905095382061 nsec\nrounds: 103093"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 670143.2677096868,
            "unit": "iter/sec",
            "range": "stddev: 0.0000039563931515171655",
            "extra": "mean: 1.4922182288238925 usec\nrounds: 74075"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3365669.53077091,
            "unit": "iter/sec",
            "range": "stddev: 3.921496938078448e-7",
            "extra": "mean: 297.1177029882982 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "morgan_mclean@hotmail.com",
            "name": "Morgan McLean",
            "username": "mtwo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3a078296c098d861a2e70795404a1e5938d44cc",
          "message": "Added Zoom passcode (#295)",
          "timestamp": "2021-01-26T08:15:47-08:00",
          "tree_id": "ba9b86df7270b95a084ae310f92e9b726eeb0634",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f3a078296c098d861a2e70795404a1e5938d44cc"
        },
        "date": 1611677854439,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4025297.813782734,
            "unit": "iter/sec",
            "range": "stddev: 4.3785612307951243e-8",
            "extra": "mean: 248.4288234714952 nsec\nrounds: 60976"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7580320.2112708315,
            "unit": "iter/sec",
            "range": "stddev: 5.161555169868831e-8",
            "extra": "mean: 131.92054848982548 nsec\nrounds: 106383"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 599288.2353038674,
            "unit": "iter/sec",
            "range": "stddev: 0.000004361976195510389",
            "extra": "mean: 1.6686461390201817 usec\nrounds: 75758"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2826692.0538824005,
            "unit": "iter/sec",
            "range": "stddev: 2.3738814086537292e-7",
            "extra": "mean: 353.770407578161 nsec\nrounds: 36631"
          }
        ]
      },
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
          "id": "c9075cf1f22341b3d6e8c298de93cbb344450aca",
          "message": "Add readTheDocs (#252)\n\nCo-authored-by: Aaron Abbott <aaronabbott@google.com>\r\nCo-authored-by: alrex <aboten@lightstep.com>",
          "timestamp": "2021-01-26T09:06:39-08:00",
          "tree_id": "8b86f1c8f9aba2a680890ffa3666177f0aee73ba",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/c9075cf1f22341b3d6e8c298de93cbb344450aca"
        },
        "date": 1611681087415,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4479331.622551826,
            "unit": "iter/sec",
            "range": "stddev: 3.295700950090976e-8",
            "extra": "mean: 223.2475923339526 nsec\nrounds: 50252"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8897654.77913511,
            "unit": "iter/sec",
            "range": "stddev: 2.7746589203504342e-8",
            "extra": "mean: 112.38916600191251 nsec\nrounds: 105264"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 653202.7319712943,
            "unit": "iter/sec",
            "range": "stddev: 8.305946416178254e-7",
            "extra": "mean: 1.5309182755285329 usec\nrounds: 73530"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3223784.316905221,
            "unit": "iter/sec",
            "range": "stddev: 4.3667540252001884e-7",
            "extra": "mean: 310.19444903790856 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f279d396231ceb9e08429443234db6e9d4d6d437",
          "message": "updating readme (#296)\n\nAdding more details to the readme including a link to the read the docs",
          "timestamp": "2021-01-26T09:35:37-08:00",
          "tree_id": "18d08ec0e004137fd205213222edf4160c7bce83",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f279d396231ceb9e08429443234db6e9d4d6d437"
        },
        "date": 1611682615940,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4391675.88722574,
            "unit": "iter/sec",
            "range": "stddev: 5.005260977230271e-8",
            "extra": "mean: 227.7035067429979 nsec\nrounds: 60241"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 9133915.303220749,
            "unit": "iter/sec",
            "range": "stddev: 3.315259651449212e-8",
            "extra": "mean: 109.48207497033802 nsec\nrounds: 123457"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 704893.8664516689,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035710841342932778",
            "extra": "mean: 1.418653286109159 usec\nrounds: 90091"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3289684.4593509794,
            "unit": "iter/sec",
            "range": "stddev: 1.5146575643336421e-7",
            "extra": "mean: 303.98052225267423 nsec\nrounds: 44844"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc260c748d468a3f2f5c9657c23aee848e6e7eb",
          "message": "update python version for readthedocs (#297)",
          "timestamp": "2021-01-26T09:51:37-08:00",
          "tree_id": "bf7cd69d2f07891fde7b65f79a8275e1aec57236",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/fcc260c748d468a3f2f5c9657c23aee848e6e7eb"
        },
        "date": 1611683556083,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4515936.4561625,
            "unit": "iter/sec",
            "range": "stddev: 3.146317099835841e-8",
            "extra": "mean: 221.43801395511753 nsec\nrounds: 51021"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8889011.831720386,
            "unit": "iter/sec",
            "range": "stddev: 2.6455719614199255e-8",
            "extra": "mean: 112.49844402627762 nsec\nrounds: 103093"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 687560.3069239464,
            "unit": "iter/sec",
            "range": "stddev: 3.0219829606516596e-7",
            "extra": "mean: 1.4544178742281475 usec\nrounds: 74627"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3433452.3250000197,
            "unit": "iter/sec",
            "range": "stddev: 3.919575528610099e-7",
            "extra": "mean: 291.25204177703023 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "theegrandmaster@gmail.com",
            "name": "M.J",
            "username": "theelous3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c",
          "message": "Aiohttp instrumentation readme (#286)",
          "timestamp": "2021-01-28T09:12:31-08:00",
          "tree_id": "84870866cf1256c3930a9b9f445c1dfe00efadd8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/5dd2412d75dfac0bc77f2e492f474a5d1dbe8a9c"
        },
        "date": 1611854046783,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3523994.5681323614,
            "unit": "iter/sec",
            "range": "stddev: 2.3189755881421088e-7",
            "extra": "mean: 283.7688823482026 nsec\nrounds: 47394"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7499387.616035075,
            "unit": "iter/sec",
            "range": "stddev: 2.0996616955824267e-7",
            "extra": "mean: 133.34422104836895 nsec\nrounds: 102041"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 506550.0766478648,
            "unit": "iter/sec",
            "range": "stddev: 0.000002654608551852903",
            "extra": "mean: 1.9741384832425108 usec\nrounds: 71943"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2585090.988995153,
            "unit": "iter/sec",
            "range": "stddev: 0.000001087258156603297",
            "extra": "mean: 386.8335792654681 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f022385e37d14f5baadda2292a1115ef244b7523",
          "message": "update references to main (#306)",
          "timestamp": "2021-01-29T12:09:22-08:00",
          "tree_id": "b5abf4db59338681d5cfa6418f374bbb6cc38789",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f022385e37d14f5baadda2292a1115ef244b7523"
        },
        "date": 1611951133449,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4543991.974128048,
            "unit": "iter/sec",
            "range": "stddev: 2.902793970494908e-8",
            "extra": "mean: 220.07081123685572 nsec\nrounds: 50762"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8958789.092007738,
            "unit": "iter/sec",
            "range": "stddev: 2.497506812990228e-8",
            "extra": "mean: 111.62222815267262 nsec\nrounds: 104167"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 664640.5725079114,
            "unit": "iter/sec",
            "range": "stddev: 0.000005130742372405052",
            "extra": "mean: 1.5045726086607059 usec\nrounds: 75188"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3357614.169109414,
            "unit": "iter/sec",
            "range": "stddev: 3.772151982185372e-7",
            "extra": "mean: 297.8305277600986 nsec\nrounds: 196079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mario.jonke@dynatrace.com",
            "name": "Mario Jonke",
            "username": "mariojonke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f0adb23143e56dffc3face697b17349dd3281f56",
          "message": "Remove 'component' span attribute in instrumentations (#301)",
          "timestamp": "2021-01-29T13:15:26-08:00",
          "tree_id": "4661d9ccf175efe020f4f9afe15b86d61eb89b14",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/f0adb23143e56dffc3face697b17349dd3281f56"
        },
        "date": 1611955021654,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3771572.9021134116,
            "unit": "iter/sec",
            "range": "stddev: 4.939653176909436e-8",
            "extra": "mean: 265.1413683240565 nsec\nrounds: 42373"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7378398.515478879,
            "unit": "iter/sec",
            "range": "stddev: 3.922581437202664e-8",
            "extra": "mean: 135.53076563989362 nsec\nrounds: 85471"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 587492.5267837073,
            "unit": "iter/sec",
            "range": "stddev: 3.411049749690933e-7",
            "extra": "mean: 1.702149311540418 usec\nrounds: 86207"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2580689.924776817,
            "unit": "iter/sec",
            "range": "stddev: 5.834039372691168e-7",
            "extra": "mean: 387.49327859948875 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ocelotl@users.noreply.github.com",
            "name": "Diego Hurtado",
            "username": "ocelotl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2fd68a2bf9b91f00bd30f47b4aac84e0052af034",
          "message": "Remove Configuration from instrumentations (#285)",
          "timestamp": "2021-02-04T08:02:37-08:00",
          "tree_id": "bdd0d76071a8dc726d87e3d7837280caa60fab24",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/2fd68a2bf9b91f00bd30f47b4aac84e0052af034"
        },
        "date": 1612454645561,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4074308.1236094115,
            "unit": "iter/sec",
            "range": "stddev: 4.9059360073697086e-8",
            "extra": "mean: 245.44044526361935 nsec\nrounds: 52351"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7897923.4097455125,
            "unit": "iter/sec",
            "range": "stddev: 3.544367829025324e-8",
            "extra": "mean: 126.61556058720146 nsec\nrounds: 123442"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 620216.1134173726,
            "unit": "iter/sec",
            "range": "stddev: 3.9291079003769016e-7",
            "extra": "mean: 1.612341211985002 usec\nrounds: 85463"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3087211.8484316804,
            "unit": "iter/sec",
            "range": "stddev: 4.6891122325537564e-7",
            "extra": "mean: 323.916870333325 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b016f6f774225065dc5fc3e5df0f7858827a07ea",
          "message": "update requirements for snappy (#314)",
          "timestamp": "2021-02-04T15:10:10-08:00",
          "tree_id": "8e066a24cd6aa230b9dc9dfc6bf9a1dc7f37b483",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b016f6f774225065dc5fc3e5df0f7858827a07ea"
        },
        "date": 1612480293285,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 3677510.4718030933,
            "unit": "iter/sec",
            "range": "stddev: 2.0918930100711393e-7",
            "extra": "mean: 271.92308700892653 nsec\nrounds: 45455"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7217692.010498186,
            "unit": "iter/sec",
            "range": "stddev: 2.756671057610184e-7",
            "extra": "mean: 138.5484443704602 nsec\nrounds: 96154"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 498564.61270890175,
            "unit": "iter/sec",
            "range": "stddev: 0.000007653091550629404",
            "extra": "mean: 2.005758079312105 usec\nrounds: 71943"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2577652.544329411,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013825100580690533",
            "extra": "mean: 387.9498818411249 nsec\nrounds: 188680"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aboten@lightstep.com",
            "name": "alrex",
            "username": "codeboten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b53b9a012f76c4fc883c3c245fddc29142706d0d",
          "message": "Fix failing aiopg tests (#317)",
          "timestamp": "2021-02-04T17:39:24-08:00",
          "tree_id": "6e0ed7b51c1d7108b87c3ec62a8ff3ae6a154fe8",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/b53b9a012f76c4fc883c3c245fddc29142706d0d"
        },
        "date": 1612489242379,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 2712454.5783492327,
            "unit": "iter/sec",
            "range": "stddev: 4.913148539504611e-7",
            "extra": "mean: 368.6697679592033 nsec\nrounds: 192308"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 7190145.942928097,
            "unit": "iter/sec",
            "range": "stddev: 2.2142795794901557e-7",
            "extra": "mean: 139.07923537822606 nsec\nrounds: 93458"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 454470.31067931134,
            "unit": "iter/sec",
            "range": "stddev: 0.000001972877668373903",
            "extra": "mean: 2.2003637564470924 usec\nrounds: 59881"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2553428.6441891794,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016263731435201639",
            "extra": "mean: 391.6302898359868 nsec\nrounds: 192308"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "31176812+garnertan@users.noreply.github.com",
            "name": "Garner Jervis Tan",
            "username": "garnertan"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55efeb6063e2704b70c46290e005cb2278f3dbd4",
          "message": "Case insensitive header key retrieval for asgi instrumentation (#308)",
          "timestamp": "2021-02-05T08:51:06-08:00",
          "tree_id": "1d412776f2f4d7bea57e1f80bafa6b4317361bb4",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/55efeb6063e2704b70c46290e005cb2278f3dbd4"
        },
        "date": 1612543927904,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 5011711.801193981,
            "unit": "iter/sec",
            "range": "stddev: 3.330647473144517e-8",
            "extra": "mean: 199.53262271820822 nsec\nrounds: 57143"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 9697603.835410165,
            "unit": "iter/sec",
            "range": "stddev: 2.9078625275981236e-8",
            "extra": "mean: 103.11825652735948 nsec\nrounds: 114943"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 621795.8164977593,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051644003248786094",
            "extra": "mean: 1.6082449792481255 usec\nrounds: 75188"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 3449701.0596391954,
            "unit": "iter/sec",
            "range": "stddev: 1.9190073309466046e-7",
            "extra": "mean: 289.8801904025107 nsec\nrounds: 38760"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "alertedsnake@users.noreply.github.com",
            "name": "Michael Stella",
            "username": "alertedsnake"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ade29f692bb7d0ab23aad638f9503bf6dbaec507",
          "message": "gRPC instrumentation: client additions (#269)\n\nThe docs on metric labels suggests that they should probably be strings,\r\nand all others I can find are strings, and so these ought to be also.\r\nOtherwise, some of the exporters/processors have to handle things\r\nspecifically, and not all of these come out as nice as could be when you\r\n`str()` them.\r\n\r\nI've also made sure to use the `StatusCode` name, as that's the\r\ninteresting thing.\r\n\r\nFinally, there's no need to report specifically that `error=false`, so\r\nI've removed that tag.",
          "timestamp": "2021-02-05T09:09:57-08:00",
          "tree_id": "0ba0a2485e59a499caa935b144abe3b86fa2ac9c",
          "url": "https://github.com/open-telemetry/opentelemetry-python-contrib/commit/ade29f692bb7d0ab23aad638f9503bf6dbaec507"
        },
        "date": 1612545057281,
        "tool": "pytest",
        "benches": [
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_trace_id",
            "value": 4358259.181835713,
            "unit": "iter/sec",
            "range": "stddev: 5.219547708733315e-8",
            "extra": "mean: 229.44941048200772 nsec\nrounds: 60965"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/test_benchmark_aws_xray_ids_generator.py::test_generate_xray_span_id",
            "value": 8595194.55404609,
            "unit": "iter/sec",
            "range": "stddev: 3.6591598517898707e-8",
            "extra": "mean: 116.34407967292947 nsec\nrounds: 120468"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_extract_single_header",
            "value": 655007.2177517603,
            "unit": "iter/sec",
            "range": "stddev: 0.00000465793292395789",
            "extra": "mean: 1.5267007338215455 usec\nrounds: 86942"
          },
          {
            "name": "sdk-extension/opentelemetry-sdk-extension-aws/tests/performance/benchmarks/trace/propagation/test_benchmark_aws_xray_format.py::test_inject_empty_context",
            "value": 2968559.5968129686,
            "unit": "iter/sec",
            "range": "stddev: 1.845513089724458e-7",
            "extra": "mean: 336.863710290201 nsec\nrounds: 41835"
          }
        ]
      }
    ]
  }
}