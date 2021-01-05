window.BENCHMARK_DATA = {
  "lastUpdate": 1609866416678,
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
      }
    ]
  }
}