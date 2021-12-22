window.BENCHMARK_DATA = {
  "lastUpdate": 1640168047275,
  "repoUrl": "https://github.com/structsdev/gen",
  "entries": {
    "Benchmark Results": [
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "02562ada5308d3c4faee0a57db82fd0844299750",
          "message": "Package gen is a generic general use Go functions library\nwhich can be used throughout any project.\n\nAs a rule the methods in this package are non-destructive\nand return a new value rather than modifying the original.\n\nTo import this package it is recommended that you use a `.`\nimport like so:\n\nimport . \"go.structs.dev/gen\"\n\nThis allows for methods in `gen` to be used directly within\nthe same namespace without needing to prefix them with `gen.`",
          "timestamp": "2021-12-21T14:58:53-05:00",
          "tree_id": "669301bb7711a90e19d213bb0dde6a5da9115195",
          "url": "https://github.com/structsdev/gen/commit/02562ada5308d3c4faee0a57db82fd0844299750"
        },
        "date": 1640118649162,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 846.6,
            "unit": "ns/op",
            "extra": "1406085 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 743.6,
            "unit": "ns/op",
            "extra": "1636719 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 5.44,
            "unit": "ns/op",
            "extra": "220793038 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 6.096,
            "unit": "ns/op",
            "extra": "196073817 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 700.3,
            "unit": "ns/op",
            "extra": "1722424 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 737.2,
            "unit": "ns/op",
            "extra": "1624768 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 109.1,
            "unit": "ns/op",
            "extra": "10883948 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 9.774,
            "unit": "ns/op",
            "extra": "122799405 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 3.717,
            "unit": "ns/op",
            "extra": "323402560 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 5.729,
            "unit": "ns/op",
            "extra": "209928667 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 5.772,
            "unit": "ns/op",
            "extra": "207804331 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 5.662,
            "unit": "ns/op",
            "extra": "193629882 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 5.653,
            "unit": "ns/op",
            "extra": "216803198 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 4.466,
            "unit": "ns/op",
            "extra": "264280047 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 6.29,
            "unit": "ns/op",
            "extra": "191238183 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 9.055,
            "unit": "ns/op",
            "extra": "132664876 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 223.5,
            "unit": "ns/op",
            "extra": "5426756 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 177.7,
            "unit": "ns/op",
            "extra": "6778473 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 109.3,
            "unit": "ns/op",
            "extra": "10982353 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 456.2,
            "unit": "ns/op",
            "extra": "2496158 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 645.9,
            "unit": "ns/op",
            "extra": "1875405 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 567.6,
            "unit": "ns/op",
            "extra": "2103117 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 236,
            "unit": "ns/op",
            "extra": "4914632 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 290.3,
            "unit": "ns/op",
            "extra": "3986506 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "14f01848f8e38b623b4ab9e8af6d677d94b2e27f",
          "message": "Adding pre-release support",
          "timestamp": "2021-12-21T15:40:57-05:00",
          "tree_id": "1f83ee479a93fbc4d637ec5015074756699caacd",
          "url": "https://github.com/structsdev/gen/commit/14f01848f8e38b623b4ab9e8af6d677d94b2e27f"
        },
        "date": 1640119350835,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 887.8,
            "unit": "ns/op",
            "extra": "1340035 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 738.9,
            "unit": "ns/op",
            "extra": "1586739 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 5.502,
            "unit": "ns/op",
            "extra": "218426530 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 6.054,
            "unit": "ns/op",
            "extra": "198191524 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 699.8,
            "unit": "ns/op",
            "extra": "1671849 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 739.2,
            "unit": "ns/op",
            "extra": "1627898 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 109,
            "unit": "ns/op",
            "extra": "10569428 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 9.812,
            "unit": "ns/op",
            "extra": "122811325 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 3.736,
            "unit": "ns/op",
            "extra": "322788740 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 5.723,
            "unit": "ns/op",
            "extra": "210126021 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 5.752,
            "unit": "ns/op",
            "extra": "210045289 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 6.381,
            "unit": "ns/op",
            "extra": "185508796 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 6.319,
            "unit": "ns/op",
            "extra": "191180750 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 5.078,
            "unit": "ns/op",
            "extra": "235865794 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 7.104,
            "unit": "ns/op",
            "extra": "168975421 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 9.048,
            "unit": "ns/op",
            "extra": "132532044 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 221.9,
            "unit": "ns/op",
            "extra": "5361208 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 175.5,
            "unit": "ns/op",
            "extra": "6769393 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 109.2,
            "unit": "ns/op",
            "extra": "10995709 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 473.5,
            "unit": "ns/op",
            "extra": "2548551 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 689.9,
            "unit": "ns/op",
            "extra": "1741477 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 592.8,
            "unit": "ns/op",
            "extra": "2018983 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 241.3,
            "unit": "ns/op",
            "extra": "4984998 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 295.4,
            "unit": "ns/op",
            "extra": "4039898 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "25e6b8b4393e57a09474a6f6ad1480cecc4df37f",
          "message": "removing pre-release extraneous file",
          "timestamp": "2021-12-21T15:41:37-05:00",
          "tree_id": "e8113e676961ef537af248d632b70a2a40be39e8",
          "url": "https://github.com/structsdev/gen/commit/25e6b8b4393e57a09474a6f6ad1480cecc4df37f"
        },
        "date": 1640119373740,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 1086,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 905.3,
            "unit": "ns/op",
            "extra": "1343647 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 6.307,
            "unit": "ns/op",
            "extra": "189950068 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 7.347,
            "unit": "ns/op",
            "extra": "167674318 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 849.8,
            "unit": "ns/op",
            "extra": "1412298 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 922.8,
            "unit": "ns/op",
            "extra": "1347706 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 127.1,
            "unit": "ns/op",
            "extra": "8508195 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 11.04,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 4.384,
            "unit": "ns/op",
            "extra": "277426980 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 6.715,
            "unit": "ns/op",
            "extra": "175670286 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 6.99,
            "unit": "ns/op",
            "extra": "182355734 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 7.795,
            "unit": "ns/op",
            "extra": "152337396 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 7.359,
            "unit": "ns/op",
            "extra": "160280418 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 6.082,
            "unit": "ns/op",
            "extra": "196431330 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 8.443,
            "unit": "ns/op",
            "extra": "139511617 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 10.56,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 269.2,
            "unit": "ns/op",
            "extra": "4422501 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 211.2,
            "unit": "ns/op",
            "extra": "5906156 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 122.9,
            "unit": "ns/op",
            "extra": "8707904 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 544.3,
            "unit": "ns/op",
            "extra": "2158142 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 818.3,
            "unit": "ns/op",
            "extra": "1498717 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 693,
            "unit": "ns/op",
            "extra": "1740441 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 282.6,
            "unit": "ns/op",
            "extra": "4408306 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 340.4,
            "unit": "ns/op",
            "extra": "3557041 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "c34d692341fac2517c284c0b47363091b0da6b73",
          "message": "Adding temp docs to readme until package site supports 1.18",
          "timestamp": "2021-12-21T16:37:57-05:00",
          "tree_id": "35b882b7e905cdd1047f77c03d4d927d8e1df6de",
          "url": "https://github.com/structsdev/gen/commit/c34d692341fac2517c284c0b47363091b0da6b73"
        },
        "date": 1640122750751,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 898.8,
            "unit": "ns/op",
            "extra": "1334900 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 749.2,
            "unit": "ns/op",
            "extra": "1601238 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 5.411,
            "unit": "ns/op",
            "extra": "221017009 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 6.081,
            "unit": "ns/op",
            "extra": "197609134 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 703.7,
            "unit": "ns/op",
            "extra": "1672268 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 738.6,
            "unit": "ns/op",
            "extra": "1501159 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 110.4,
            "unit": "ns/op",
            "extra": "10354953 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 9.769,
            "unit": "ns/op",
            "extra": "122222208 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 3.708,
            "unit": "ns/op",
            "extra": "322272927 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 5.731,
            "unit": "ns/op",
            "extra": "209705900 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 5.661,
            "unit": "ns/op",
            "extra": "217462939 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 6.384,
            "unit": "ns/op",
            "extra": "187751887 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 6.304,
            "unit": "ns/op",
            "extra": "188558094 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 5.068,
            "unit": "ns/op",
            "extra": "235238506 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 7.089,
            "unit": "ns/op",
            "extra": "169217475 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 9.042,
            "unit": "ns/op",
            "extra": "132097852 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 224.7,
            "unit": "ns/op",
            "extra": "4882898 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 178.7,
            "unit": "ns/op",
            "extra": "6631556 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 109.3,
            "unit": "ns/op",
            "extra": "10992548 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 481.1,
            "unit": "ns/op",
            "extra": "2415184 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 783.9,
            "unit": "ns/op",
            "extra": "1720015 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 600.3,
            "unit": "ns/op",
            "extra": "2012856 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 243.4,
            "unit": "ns/op",
            "extra": "4879921 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 299,
            "unit": "ns/op",
            "extra": "3998184 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "729b8ec47621cdde9d45ca44bd009c58175fc191",
          "message": "Update docs link for now",
          "timestamp": "2021-12-21T16:38:51-05:00",
          "tree_id": "e854f7fdd59f31f696894e7bd3e95a978acad082",
          "url": "https://github.com/structsdev/gen/commit/729b8ec47621cdde9d45ca44bd009c58175fc191"
        },
        "date": 1640122804771,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 883.6,
            "unit": "ns/op",
            "extra": "1359088 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 743.6,
            "unit": "ns/op",
            "extra": "1615004 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 5.406,
            "unit": "ns/op",
            "extra": "220407991 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 6.054,
            "unit": "ns/op",
            "extra": "198142250 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 733.5,
            "unit": "ns/op",
            "extra": "1701938 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 735,
            "unit": "ns/op",
            "extra": "1631238 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 109.2,
            "unit": "ns/op",
            "extra": "10771124 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 9.793,
            "unit": "ns/op",
            "extra": "121887679 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 3.766,
            "unit": "ns/op",
            "extra": "321877840 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 5.736,
            "unit": "ns/op",
            "extra": "209476618 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 5.826,
            "unit": "ns/op",
            "extra": "204432547 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 6.379,
            "unit": "ns/op",
            "extra": "186625851 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 6.269,
            "unit": "ns/op",
            "extra": "190293669 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 5.061,
            "unit": "ns/op",
            "extra": "233312378 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 7.058,
            "unit": "ns/op",
            "extra": "169185300 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 9.058,
            "unit": "ns/op",
            "extra": "131867041 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 225.3,
            "unit": "ns/op",
            "extra": "5401989 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 176.5,
            "unit": "ns/op",
            "extra": "6843694 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 109.3,
            "unit": "ns/op",
            "extra": "10989315 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 476.6,
            "unit": "ns/op",
            "extra": "2388470 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 694.5,
            "unit": "ns/op",
            "extra": "1732095 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 601.8,
            "unit": "ns/op",
            "extra": "2007049 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 241.9,
            "unit": "ns/op",
            "extra": "4861455 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 298.5,
            "unit": "ns/op",
            "extra": "3998232 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "5d5cfd4a006aeae0adca27371eec682ee51d76ec",
          "message": "Documentation updates",
          "timestamp": "2021-12-21T17:11:04-05:00",
          "tree_id": "ee2eeb3961808a85a1385ee80e16a5758eeff86f",
          "url": "https://github.com/structsdev/gen/commit/5d5cfd4a006aeae0adca27371eec682ee51d76ec"
        },
        "date": 1640124741490,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 1146,
            "unit": "ns/op",
            "extra": "877141 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 939.9,
            "unit": "ns/op",
            "extra": "1274752 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 7.205,
            "unit": "ns/op",
            "extra": "159174075 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 7.238,
            "unit": "ns/op",
            "extra": "152286277 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 797.2,
            "unit": "ns/op",
            "extra": "1442079 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 823.3,
            "unit": "ns/op",
            "extra": "1522392 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 119.3,
            "unit": "ns/op",
            "extra": "9401952 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 11.96,
            "unit": "ns/op",
            "extra": "97944127 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 3.165,
            "unit": "ns/op",
            "extra": "349390258 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 6.528,
            "unit": "ns/op",
            "extra": "195507026 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 9.043,
            "unit": "ns/op",
            "extra": "125818892 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 9.14,
            "unit": "ns/op",
            "extra": "131567844 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 6.787,
            "unit": "ns/op",
            "extra": "168006884 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 6.363,
            "unit": "ns/op",
            "extra": "178660689 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 11.62,
            "unit": "ns/op",
            "extra": "88741708 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 9.19,
            "unit": "ns/op",
            "extra": "132538761 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 262.6,
            "unit": "ns/op",
            "extra": "5017768 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 172.3,
            "unit": "ns/op",
            "extra": "6998053 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 116.4,
            "unit": "ns/op",
            "extra": "11148278 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 629.9,
            "unit": "ns/op",
            "extra": "1943820 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 802.9,
            "unit": "ns/op",
            "extra": "1543612 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 664.6,
            "unit": "ns/op",
            "extra": "1664566 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 266.3,
            "unit": "ns/op",
            "extra": "4224739 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 334.8,
            "unit": "ns/op",
            "extra": "3773780 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "cf472da15fd11d1618fd748b5f5cba6d5a8ce19a",
          "message": "Documentation updates",
          "timestamp": "2021-12-21T17:11:45-05:00",
          "tree_id": "a7d20d25ac180429217071840e59adeb7034c8b8",
          "url": "https://github.com/structsdev/gen/commit/cf472da15fd11d1618fd748b5f5cba6d5a8ce19a"
        },
        "date": 1640124781845,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 1081,
            "unit": "ns/op",
            "extra": "1091250 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 903.9,
            "unit": "ns/op",
            "extra": "1301865 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 6.558,
            "unit": "ns/op",
            "extra": "180719984 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 7.304,
            "unit": "ns/op",
            "extra": "154933354 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 864.8,
            "unit": "ns/op",
            "extra": "1368447 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 905.2,
            "unit": "ns/op",
            "extra": "1330126 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 132.6,
            "unit": "ns/op",
            "extra": "8817411 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 11.98,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 4.456,
            "unit": "ns/op",
            "extra": "268308478 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 6.924,
            "unit": "ns/op",
            "extra": "173957931 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 6.974,
            "unit": "ns/op",
            "extra": "174351189 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 7.665,
            "unit": "ns/op",
            "extra": "154513873 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 7.526,
            "unit": "ns/op",
            "extra": "155289939 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 6.13,
            "unit": "ns/op",
            "extra": "196631502 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 8.545,
            "unit": "ns/op",
            "extra": "139950787 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 10.85,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 268.9,
            "unit": "ns/op",
            "extra": "4463294 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 211.2,
            "unit": "ns/op",
            "extra": "5476144 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 132.6,
            "unit": "ns/op",
            "extra": "9154161 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 566.5,
            "unit": "ns/op",
            "extra": "2102337 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 831,
            "unit": "ns/op",
            "extra": "1450114 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 724.5,
            "unit": "ns/op",
            "extra": "1654984 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 294.3,
            "unit": "ns/op",
            "extra": "4087375 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 366.2,
            "unit": "ns/op",
            "extra": "3379506 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "ee08c021867b0248189f24071943e88bf7d92a2f",
          "message": "Adding As method for casting disparate types that implement the same interface",
          "timestamp": "2021-12-21T19:08:57-05:00",
          "tree_id": "256f68fd7d40355246892eb158d3a2ffedb41535",
          "url": "https://github.com/structsdev/gen/commit/ee08c021867b0248189f24071943e88bf7d92a2f"
        },
        "date": 1640131831722,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 1033,
            "unit": "ns/op",
            "extra": "1000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 797.8,
            "unit": "ns/op",
            "extra": "1342971 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 7.107,
            "unit": "ns/op",
            "extra": "186081985 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 6.712,
            "unit": "ns/op",
            "extra": "185227152 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 858.2,
            "unit": "ns/op",
            "extra": "1426656 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 897.4,
            "unit": "ns/op",
            "extra": "1431937 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 130.6,
            "unit": "ns/op",
            "extra": "9659966 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 13.15,
            "unit": "ns/op",
            "extra": "78754998 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 3.533,
            "unit": "ns/op",
            "extra": "338564676 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 7.218,
            "unit": "ns/op",
            "extra": "165846574 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 10.33,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 10.91,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 7.085,
            "unit": "ns/op",
            "extra": "170338245 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 7.035,
            "unit": "ns/op",
            "extra": "180674365 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 10.82,
            "unit": "ns/op",
            "extra": "100000000 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 8.864,
            "unit": "ns/op",
            "extra": "133765206 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 258,
            "unit": "ns/op",
            "extra": "4235760 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 188.8,
            "unit": "ns/op",
            "extra": "6441552 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 119.9,
            "unit": "ns/op",
            "extra": "9788416 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 601.2,
            "unit": "ns/op",
            "extra": "2076860 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 842,
            "unit": "ns/op",
            "extra": "1398800 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 728.5,
            "unit": "ns/op",
            "extra": "1647612 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 290.4,
            "unit": "ns/op",
            "extra": "4439005 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 357.6,
            "unit": "ns/op",
            "extra": "3066010 times\n2 procs"
          },
          {
            "name": "Benchmark_As",
            "value": 97.57,
            "unit": "ns/op",
            "extra": "12787668 times\n2 procs"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "committer": {
            "email": "benji@devnw.com",
            "name": "Benji Vesterby",
            "username": "benjivesterby"
          },
          "distinct": true,
          "id": "cfab69334e2a40f71193664dfbbd89af26afdf6e",
          "message": "Simplified As",
          "timestamp": "2021-12-22T05:12:46-05:00",
          "tree_id": "63023c71af2f40fcc347a1f487901b5e1af8c95d",
          "url": "https://github.com/structsdev/gen/commit/cfab69334e2a40f71193664dfbbd89af26afdf6e"
        },
        "date": 1640168045331,
        "tool": "go",
        "benches": [
          {
            "name": "Benchmark_Unique",
            "value": 888.7,
            "unit": "ns/op",
            "extra": "1333962 times\n2 procs"
          },
          {
            "name": "Benchmark_Unique_NoUnique",
            "value": 742.5,
            "unit": "ns/op",
            "extra": "1586782 times\n2 procs"
          },
          {
            "name": "Benchmark_Has",
            "value": 5.725,
            "unit": "ns/op",
            "extra": "208690321 times\n2 procs"
          },
          {
            "name": "Benchmark_Has_DoesntHave",
            "value": 5.752,
            "unit": "ns/op",
            "extra": "208739691 times\n2 procs"
          },
          {
            "name": "Benchmark_Match",
            "value": 704.6,
            "unit": "ns/op",
            "extra": "1575880 times\n2 procs"
          },
          {
            "name": "Benchmark_Match_Doesnt",
            "value": 756.4,
            "unit": "ns/op",
            "extra": "1599879 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices",
            "value": 105.5,
            "unit": "ns/op",
            "extra": "10986272 times\n2 procs"
          },
          {
            "name": "Benchmark_Indices_None",
            "value": 12.39,
            "unit": "ns/op",
            "extra": "95883612 times\n2 procs"
          },
          {
            "name": "Benchmark_Index",
            "value": 3.941,
            "unit": "ns/op",
            "extra": "311285142 times\n2 procs"
          },
          {
            "name": "Benchmark_Index_None",
            "value": 5.776,
            "unit": "ns/op",
            "extra": "209300823 times\n2 procs"
          },
          {
            "name": "Benchmark_comp",
            "value": 8.726,
            "unit": "ns/op",
            "extra": "137387656 times\n2 procs"
          },
          {
            "name": "Benchmark_comp_nomatch",
            "value": 9.039,
            "unit": "ns/op",
            "extra": "132784075 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal",
            "value": 5.755,
            "unit": "ns/op",
            "extra": "208035318 times\n2 procs"
          },
          {
            "name": "Benchmark_Equal_not",
            "value": 5.081,
            "unit": "ns/op",
            "extra": "233225418 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare",
            "value": 9.377,
            "unit": "ns/op",
            "extra": "127939176 times\n2 procs"
          },
          {
            "name": "Benchmark_Compare_err",
            "value": 5.58,
            "unit": "ns/op",
            "extra": "213812862 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_full",
            "value": 235.5,
            "unit": "ns/op",
            "extra": "4788390 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_partial",
            "value": 173.3,
            "unit": "ns/op",
            "extra": "6926654 times\n2 procs"
          },
          {
            "name": "Benchmark_Intersect_none",
            "value": 92.68,
            "unit": "ns/op",
            "extra": "12714752 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_all",
            "value": 475.2,
            "unit": "ns/op",
            "extra": "2543935 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_partial",
            "value": 676.1,
            "unit": "ns/op",
            "extra": "1750147 times\n2 procs"
          },
          {
            "name": "Benchmark_Diff_none",
            "value": 588.6,
            "unit": "ns/op",
            "extra": "2031399 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude",
            "value": 237.5,
            "unit": "ns/op",
            "extra": "4997341 times\n2 procs"
          },
          {
            "name": "Benchmark_Exclude_none",
            "value": 310.8,
            "unit": "ns/op",
            "extra": "3849628 times\n2 procs"
          },
          {
            "name": "Benchmark_As",
            "value": 0.6694,
            "unit": "ns/op",
            "extra": "1000000000 times\n2 procs"
          }
        ]
      }
    ]
  }
}