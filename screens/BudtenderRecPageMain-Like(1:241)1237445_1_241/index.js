import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_1_2336}>
        <View style={styles.View_1_2337} />
        <View style={styles.View_1_2338}>
          <View style={styles.View_1_2339}>
            <View style={styles.View_1_2340}>
              <Text style={styles.Text_1_2340}>EDIBLE</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3126/3446/4b7f10d6620306a8ec9cbb0450e6d29a"
            }}
            style={styles.ImageBackground_1_2341}
          />
        </View>
        <View style={styles.View_1_2345}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a553/283c/ac73ce2622a4202b066dfc5e4d673991"
            }}
            style={styles.ImageBackground_1_2346}
          />
          <View style={styles.View_1_2347}>
            <Text style={styles.Text_1_2347}>Daniel Thomas</Text>
          </View>
          <View style={styles.View_1_2348}>
            <Text style={styles.Text_1_2348}>89 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_2349}>
          <View style={styles.View_1_2350}>
            <View style={styles.View_1_2351}>
              <Text style={styles.Text_1_2351}>
                CBD Gummies - Huckleberry - 250 mg - ...
              </Text>
            </View>
            <View style={styles.View_1_2352}>
              <View style={styles.View_1_2353}>
                <Text style={styles.Text_1_2353}>4.5</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2413}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2415}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2417}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2419}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8082/8eba/d3c14c1f57893a1b68f1c5b6e37772e2"
                }}
                style={styles.ImageBackground_1_2421}
              />
            </View>
          </View>
          <View style={styles.View_1_2359}>
            <View style={styles.View_1_2360}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e165/3d7a/28894138752c8d289220ace1e922e91a"
                }}
                style={styles.ImageBackground_1_2361}
              />
            </View>
            <View style={styles.View_1_2362}>
              <View style={styles.View_1_2363}>
                <View style={styles.View_1_2364}>
                  <Text style={styles.Text_1_2364}>Relaxed</Text>
                </View>
                <View style={styles.View_1_2424}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2434}
                  />
                  <View style={styles.View_1_2436}>
                    <View style={styles.View_1_2437}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_2438}
                      />
                      <View style={styles.View_1_2439} />
                      <View style={styles.View_1_2440} />
                      <View style={styles.View_1_2441} />
                      <View style={styles.View_1_2442} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2366}>
                <View style={styles.View_1_2367}>
                  <Text style={styles.Text_1_2367}>Happy</Text>
                </View>
                <View style={styles.View_1_2443}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2448}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_2450}
                  />
                </View>
              </View>
              <View style={styles.View_1_2369}>
                <View style={styles.View_1_2370}>
                  <Text style={styles.Text_1_2370}>Euphoric</Text>
                </View>
                <View style={styles.View_1_2452}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2457}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_2459}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_2372}
          />
          <View style={styles.View_1_2373}>
            <Text style={styles.Text_1_2373}>1 of 1</Text>
          </View>
          <View style={styles.View_1_2374}>
            <Text style={styles.Text_1_2374}>
              These gummies are the perfect thing for a mid-energy activity like
              hiking or tossing a frisbee. They&#39;re a perfect balance of
              relaxed and happy, allowing you to be at peace with the world
              while...
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_2375} />
        <View style={styles.View_1_2461}>
          <View style={styles.View_1_2462} />
          <View style={styles.View_1_2463}>
            <Text style={styles.Text_1_2463}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_2377}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_2378}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_2380}
          />
        </View>
        <View style={styles.View_1_2383}>
          <View style={styles.View_1_2384}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_2385}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_2387}
        />
      </View>
      <View style={styles.View_1_2208}>
        <View style={styles.View_1_2209} />
        <View style={styles.View_1_2210}>
          <View style={styles.View_1_2211}>
            <View style={styles.View_1_2212}>
              <Text style={styles.Text_1_2212}>EDIBLE</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3126/3446/4b7f10d6620306a8ec9cbb0450e6d29a"
            }}
            style={styles.ImageBackground_1_2213}
          />
        </View>
        <View style={styles.View_1_2217}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/657a/5844/ce85f5cf702ed30cb391eab242fba8ed"
            }}
            style={styles.ImageBackground_1_2218}
          />
          <View style={styles.View_1_2219}>
            <Text style={styles.Text_1_2219}>Jerry Einsfield</Text>
          </View>
          <View style={styles.View_1_2220}>
            <Text style={styles.Text_1_2220}>89 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_2221}>
          <View style={styles.View_1_2222}>
            <View style={styles.View_1_2223}>
              <Text style={styles.Text_1_2223}>
                CBD Gummies - Huckleberry - 250 mg - ...
              </Text>
            </View>
            <View style={styles.View_1_2224}>
              <View style={styles.View_1_2225}>
                <Text style={styles.Text_1_2225}>4.5</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2285}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2287}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2289}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2291}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8082/8eba/d3c14c1f57893a1b68f1c5b6e37772e2"
                }}
                style={styles.ImageBackground_1_2293}
              />
            </View>
          </View>
          <View style={styles.View_1_2231}>
            <View style={styles.View_1_2232}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e165/3d7a/28894138752c8d289220ace1e922e91a"
                }}
                style={styles.ImageBackground_1_2233}
              />
            </View>
            <View style={styles.View_1_2234}>
              <View style={styles.View_1_2235}>
                <View style={styles.View_1_2236}>
                  <Text style={styles.Text_1_2236}>Relaxed</Text>
                </View>
                <View style={styles.View_1_2296}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2306}
                  />
                  <View style={styles.View_1_2308}>
                    <View style={styles.View_1_2309}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_2310}
                      />
                      <View style={styles.View_1_2311} />
                      <View style={styles.View_1_2312} />
                      <View style={styles.View_1_2313} />
                      <View style={styles.View_1_2314} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2238}>
                <View style={styles.View_1_2239}>
                  <Text style={styles.Text_1_2239}>Happy</Text>
                </View>
                <View style={styles.View_1_2315}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2320}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_2322}
                  />
                </View>
              </View>
              <View style={styles.View_1_2241}>
                <View style={styles.View_1_2242}>
                  <Text style={styles.Text_1_2242}>Euphoric</Text>
                </View>
                <View style={styles.View_1_2324}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2329}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_2331}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_2244}
          />
          <View style={styles.View_1_2245}>
            <Text style={styles.Text_1_2245}>1 of 1</Text>
          </View>
          <View style={styles.View_1_2246}>
            <Text style={styles.Text_1_2246}>
              These gummies are the perfect thing for a mid-energy activity like
              hiking or tossing a frisbee. They&#39;re a perfect balance of
              relaxed and happy, allowing you to be at peace with the world
              while...
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_2247} />
        <View style={styles.View_1_2333}>
          <View style={styles.View_1_2334} />
          <View style={styles.View_1_2335}>
            <Text style={styles.Text_1_2335}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_2249}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_2250}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_2252}
          />
        </View>
        <View style={styles.View_1_2255}>
          <View style={styles.View_1_2256}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_2257}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_2259}
        />
      </View>
      <View style={styles.View_1_2080}>
        <View style={styles.View_1_2081} />
        <View style={styles.View_1_2082}>
          <View style={styles.View_1_2083}>
            <View style={styles.View_1_2084}>
              <Text style={styles.Text_1_2084}>EDIBLE</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3126/3446/4b7f10d6620306a8ec9cbb0450e6d29a"
            }}
            style={styles.ImageBackground_1_2085}
          />
        </View>
        <View style={styles.View_1_2089}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ae6/8449/5128ad2a0ef34df339b2d20eeb6df76f"
            }}
            style={styles.ImageBackground_1_2090}
          />
          <View style={styles.View_1_2091}>
            <Text style={styles.Text_1_2091}>Danya Ellerman</Text>
          </View>
          <View style={styles.View_1_2092}>
            <Text style={styles.Text_1_2092}>89 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_2093}>
          <View style={styles.View_1_2094}>
            <View style={styles.View_1_2095}>
              <Text style={styles.Text_1_2095}>
                CBD Gummies - Huckleberry - 250 mg - ...
              </Text>
            </View>
            <View style={styles.View_1_2096}>
              <View style={styles.View_1_2097}>
                <Text style={styles.Text_1_2097}>4.5</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2157}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2159}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2161}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2163}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8082/8eba/d3c14c1f57893a1b68f1c5b6e37772e2"
                }}
                style={styles.ImageBackground_1_2165}
              />
            </View>
          </View>
          <View style={styles.View_1_2103}>
            <View style={styles.View_1_2104}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e165/3d7a/28894138752c8d289220ace1e922e91a"
                }}
                style={styles.ImageBackground_1_2105}
              />
            </View>
            <View style={styles.View_1_2106}>
              <View style={styles.View_1_2107}>
                <View style={styles.View_1_2108}>
                  <Text style={styles.Text_1_2108}>Relaxed</Text>
                </View>
                <View style={styles.View_1_2168}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2178}
                  />
                  <View style={styles.View_1_2180}>
                    <View style={styles.View_1_2181}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_2182}
                      />
                      <View style={styles.View_1_2183} />
                      <View style={styles.View_1_2184} />
                      <View style={styles.View_1_2185} />
                      <View style={styles.View_1_2186} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_2110}>
                <View style={styles.View_1_2111}>
                  <Text style={styles.Text_1_2111}>Happy</Text>
                </View>
                <View style={styles.View_1_2187}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2192}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_2194}
                  />
                </View>
              </View>
              <View style={styles.View_1_2113}>
                <View style={styles.View_1_2114}>
                  <Text style={styles.Text_1_2114}>Euphoric</Text>
                </View>
                <View style={styles.View_1_2196}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2201}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_2203}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_2116}
          />
          <View style={styles.View_1_2117}>
            <Text style={styles.Text_1_2117}>1 of 1</Text>
          </View>
          <View style={styles.View_1_2118}>
            <Text style={styles.Text_1_2118}>
              These gummies are the perfect thing for a mid-energy activity like
              hiking or tossing a frisbee. They&#39;re a perfect balance of
              relaxed and happy, allowing you to be at peace with the world
              while...
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_2119} />
        <View style={styles.View_1_2205}>
          <View style={styles.View_1_2206} />
          <View style={styles.View_1_2207}>
            <Text style={styles.Text_1_2207}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_2121}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_2122}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_2124}
          />
        </View>
        <View style={styles.View_1_2127}>
          <View style={styles.View_1_2128}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_2129}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_2131}
        />
      </View>
      <View style={styles.View_1_1954}>
        <View style={styles.View_1_1955} />
        <View style={styles.View_1_1956}>
          <View style={styles.View_1_1957}>
            <View style={styles.View_1_1958}>
              <Text style={styles.Text_1_1958}>FLOWER</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c65/14bf/016ebfed8c09a67ec97231924e87fd3b"
            }}
            style={styles.ImageBackground_1_1959}
          />
        </View>
        <View style={styles.View_1_1963}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65c/f1ba/bc2e555d7569126cf35c3917d9d316bf"
            }}
            style={styles.ImageBackground_1_1964}
          />
          <View style={styles.View_1_1965}>
            <Text style={styles.Text_1_1965}>Georgina Roxalin</Text>
          </View>
          <View style={styles.View_1_1966}>
            <Text style={styles.Text_1_1966}>150 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_1967}>
          <View style={styles.View_1_1968}>
            <View style={styles.View_1_1969}>
              <Text style={styles.Text_1_1969}>Blackberry Kush</Text>
            </View>
            <View style={styles.View_1_1970}>
              <View style={styles.View_1_1971}>
                <Text style={styles.Text_1_1971}>5.0</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2030}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2034}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_2038}
              />
            </View>
          </View>
          <View style={styles.View_1_1977}>
            <View style={styles.View_1_1978}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e367/b1ec/86bb7c2993a18ee60e8b421ad20f9cb3"
                }}
                style={styles.ImageBackground_1_1979}
              />
            </View>
            <View style={styles.View_1_1980}>
              <View style={styles.View_1_1981}>
                <View style={styles.View_1_1982}>
                  <Text style={styles.Text_1_1982}>Calm</Text>
                </View>
                <View style={styles.View_1_2040}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2050}
                  />
                  <View style={styles.View_1_2052}>
                    <View style={styles.View_1_2053}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_2054}
                      />
                      <View style={styles.View_1_2055} />
                      <View style={styles.View_1_2056} />
                      <View style={styles.View_1_2057} />
                      <View style={styles.View_1_2058} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1984}>
                <View style={styles.View_1_1985}>
                  <Text style={styles.Text_1_1985}>Relax</Text>
                </View>
                <View style={styles.View_1_2059}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2064}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_2066}
                  />
                </View>
              </View>
              <View style={styles.View_1_1987}>
                <View style={styles.View_1_1988}>
                  <Text style={styles.Text_1_1988}>Sleepy</Text>
                </View>
                <View style={styles.View_1_2068}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_2073}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_2075}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_1990}
          />
          <View style={styles.View_1_1991}>
            <Text style={styles.Text_1_1991}>1 of 1</Text>
          </View>
          <View style={styles.View_1_1992}>
            <Text style={styles.Text_1_1992}>
              This flower is the perfect thing to smoke right before bed.
              It&#39;ll keep you in a deep, peaceful sleep, and you&#39;ll wake
              up to a calm and relaxing morning. One of my top favorites.
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_1993} />
        <View style={styles.View_1_2077}>
          <View style={styles.View_1_2078} />
          <View style={styles.View_1_2079}>
            <Text style={styles.Text_1_2079}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_1995}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_1996}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_1998}
          />
        </View>
        <View style={styles.View_1_2001}>
          <View style={styles.View_1_2002}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_2003}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_2005}
        />
      </View>
      <View style={styles.View_1_1828}>
        <View style={styles.View_1_1829} />
        <View style={styles.View_1_1830}>
          <View style={styles.View_1_1831}>
            <View style={styles.View_1_1832}>
              <Text style={styles.Text_1_1832}>FLOWER</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c65/14bf/016ebfed8c09a67ec97231924e87fd3b"
            }}
            style={styles.ImageBackground_1_1833}
          />
        </View>
        <View style={styles.View_1_1837}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65c/f1ba/bc2e555d7569126cf35c3917d9d316bf"
            }}
            style={styles.ImageBackground_1_1838}
          />
          <View style={styles.View_1_1839}>
            <Text style={styles.Text_1_1839}>Georgina Roxalin</Text>
          </View>
          <View style={styles.View_1_1840}>
            <Text style={styles.Text_1_1840}>150 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_1841}>
          <View style={styles.View_1_1842}>
            <View style={styles.View_1_1843}>
              <Text style={styles.Text_1_1843}>Blackberry Kush</Text>
            </View>
            <View style={styles.View_1_1844}>
              <View style={styles.View_1_1845}>
                <Text style={styles.Text_1_1845}>5.0</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1904}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1906}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1908}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1910}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1912}
              />
            </View>
          </View>
          <View style={styles.View_1_1851}>
            <View style={styles.View_1_1852}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e367/b1ec/86bb7c2993a18ee60e8b421ad20f9cb3"
                }}
                style={styles.ImageBackground_1_1853}
              />
            </View>
            <View style={styles.View_1_1854}>
              <View style={styles.View_1_1855}>
                <View style={styles.View_1_1856}>
                  <Text style={styles.Text_1_1856}>Calm</Text>
                </View>
                <View style={styles.View_1_1914}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1924}
                  />
                  <View style={styles.View_1_1926}>
                    <View style={styles.View_1_1927}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_1928}
                      />
                      <View style={styles.View_1_1929} />
                      <View style={styles.View_1_1930} />
                      <View style={styles.View_1_1931} />
                      <View style={styles.View_1_1932} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1858}>
                <View style={styles.View_1_1859}>
                  <Text style={styles.Text_1_1859}>Relax</Text>
                </View>
                <View style={styles.View_1_1933}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1938}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_1940}
                  />
                </View>
              </View>
              <View style={styles.View_1_1861}>
                <View style={styles.View_1_1862}>
                  <Text style={styles.Text_1_1862}>Sleepy</Text>
                </View>
                <View style={styles.View_1_1942}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1947}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_1949}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_1864}
          />
          <View style={styles.View_1_1865}>
            <Text style={styles.Text_1_1865}>1 of 1</Text>
          </View>
          <View style={styles.View_1_1866}>
            <Text style={styles.Text_1_1866}>
              This flower is the perfect thing to smoke right before bed.
              It&#39;ll keep you in a deep, peaceful sleep, and you&#39;ll wake
              up to a calm and relaxing morning. One of my top favorites.
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_1867} />
        <View style={styles.View_1_1951}>
          <View style={styles.View_1_1952} />
          <View style={styles.View_1_1953}>
            <Text style={styles.Text_1_1953}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_1869}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_1870}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_1872}
          />
        </View>
        <View style={styles.View_1_1875}>
          <View style={styles.View_1_1876}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_1877}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_1879}
        />
      </View>
      <View style={styles.View_1_1702}>
        <View style={styles.View_1_1703} />
        <View style={styles.View_1_1704}>
          <View style={styles.View_1_1705}>
            <View style={styles.View_1_1706}>
              <Text style={styles.Text_1_1706}>FLOWER</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c65/14bf/016ebfed8c09a67ec97231924e87fd3b"
            }}
            style={styles.ImageBackground_1_1707}
          />
        </View>
        <View style={styles.View_1_1711}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e65c/f1ba/bc2e555d7569126cf35c3917d9d316bf"
            }}
            style={styles.ImageBackground_1_1712}
          />
          <View style={styles.View_1_1713}>
            <Text style={styles.Text_1_1713}>Georgina Roxalin</Text>
          </View>
          <View style={styles.View_1_1714}>
            <Text style={styles.Text_1_1714}>150 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_1715}>
          <View style={styles.View_1_1716}>
            <View style={styles.View_1_1717}>
              <Text style={styles.Text_1_1717}>Blackberry Kush</Text>
            </View>
            <View style={styles.View_1_1718}>
              <View style={styles.View_1_1719}>
                <Text style={styles.Text_1_1719}>5.0</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1778}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1780}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1782}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1784}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1786}
              />
            </View>
          </View>
          <View style={styles.View_1_1725}>
            <View style={styles.View_1_1726}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e367/b1ec/86bb7c2993a18ee60e8b421ad20f9cb3"
                }}
                style={styles.ImageBackground_1_1727}
              />
            </View>
            <View style={styles.View_1_1728}>
              <View style={styles.View_1_1729}>
                <View style={styles.View_1_1730}>
                  <Text style={styles.Text_1_1730}>Calm</Text>
                </View>
                <View style={styles.View_1_1788}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1798}
                  />
                  <View style={styles.View_1_1800}>
                    <View style={styles.View_1_1801}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_1802}
                      />
                      <View style={styles.View_1_1803} />
                      <View style={styles.View_1_1804} />
                      <View style={styles.View_1_1805} />
                      <View style={styles.View_1_1806} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1732}>
                <View style={styles.View_1_1733}>
                  <Text style={styles.Text_1_1733}>Relax</Text>
                </View>
                <View style={styles.View_1_1807}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1812}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_1814}
                  />
                </View>
              </View>
              <View style={styles.View_1_1735}>
                <View style={styles.View_1_1736}>
                  <Text style={styles.Text_1_1736}>Sleepy</Text>
                </View>
                <View style={styles.View_1_1816}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1821}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_1823}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_1738}
          />
          <View style={styles.View_1_1739}>
            <Text style={styles.Text_1_1739}>1 of 1</Text>
          </View>
          <View style={styles.View_1_1740}>
            <Text style={styles.Text_1_1740}>
              This flower is the perfect thing to smoke right before bed.
              It&#39;ll keep you in a deep, peaceful sleep, and you&#39;ll wake
              up to a calm and relaxing morning. One of my top favorites.
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_1741} />
        <View style={styles.View_1_1825}>
          <View style={styles.View_1_1826} />
          <View style={styles.View_1_1827}>
            <Text style={styles.Text_1_1827}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_1743}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_1744}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_1746}
          />
        </View>
        <View style={styles.View_1_1749}>
          <View style={styles.View_1_1750}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_1751}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_1753}
        />
      </View>
      <View style={styles.View_1_1576}>
        <View style={styles.View_1_1577} />
        <View style={styles.View_1_1578}>
          <View style={styles.View_1_1579}>
            <View style={styles.View_1_1580}>
              <Text style={styles.Text_1_1580}>FLOWER</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3126/3446/4b7f10d6620306a8ec9cbb0450e6d29a"
            }}
            style={styles.ImageBackground_1_1581}
          />
        </View>
        <View style={styles.View_1_1585}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1d28/a39d/6955fb5c034b44e666bcc16349ad4df9"
            }}
            style={styles.ImageBackground_1_1586}
          />
          <View style={styles.View_1_1587}>
            <Text style={styles.Text_1_1587}>Gabrielle M.</Text>
          </View>
          <View style={styles.View_1_1588}>
            <Text style={styles.Text_1_1588}>59 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_1589}>
          <View style={styles.View_1_1590}>
            <View style={styles.View_1_1591}>
              <Text style={styles.Text_1_1591}>OG Kush</Text>
            </View>
            <View style={styles.View_1_1592}>
              <View style={styles.View_1_1593}>
                <Text style={styles.Text_1_1593}>5.0</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1652}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1654}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1656}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1658}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1660}
              />
            </View>
          </View>
          <View style={styles.View_1_1599}>
            <View style={styles.View_1_1600}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f76/f2f8/15f7377325aa835ef4692be11e9688b6"
                }}
                style={styles.ImageBackground_1_1601}
              />
            </View>
            <View style={styles.View_1_1602}>
              <View style={styles.View_1_1603}>
                <View style={styles.View_1_1604}>
                  <Text style={styles.Text_1_1604}>Energetic</Text>
                </View>
                <View style={styles.View_1_1662}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1672}
                  />
                  <View style={styles.View_1_1674}>
                    <View style={styles.View_1_1675}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_1676}
                      />
                      <View style={styles.View_1_1677} />
                      <View style={styles.View_1_1678} />
                      <View style={styles.View_1_1679} />
                      <View style={styles.View_1_1680} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1606}>
                <View style={styles.View_1_1607}>
                  <Text style={styles.Text_1_1607}>Focused</Text>
                </View>
                <View style={styles.View_1_1681}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1686}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_1688}
                  />
                </View>
              </View>
              <View style={styles.View_1_1609}>
                <View style={styles.View_1_1610}>
                  <Text style={styles.Text_1_1610}>Refreshed</Text>
                </View>
                <View style={styles.View_1_1690}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1695}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_1697}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_1612}
          />
          <View style={styles.View_1_1613}>
            <Text style={styles.Text_1_1613}>1 of 1</Text>
          </View>
          <View style={styles.View_1_1614}>
            <Text style={styles.Text_1_1614}>
              This is the bud that&#39;ll get you going. Wake and bake and start
              your day. Nothing has gotten me out of bed and ready for the world
              better than taking a few hits of the OG Kush.
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_1615} />
        <View style={styles.View_1_1699}>
          <View style={styles.View_1_1700} />
          <View style={styles.View_1_1701}>
            <Text style={styles.Text_1_1701}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_1617}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_1618}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_1620}
          />
        </View>
        <View style={styles.View_1_1623}>
          <View style={styles.View_1_1624}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_1625}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_1627}
        />
      </View>
      <View style={styles.View_1_1450}>
        <View style={styles.View_1_1451} />
        <View style={styles.View_1_1452}>
          <View style={styles.View_1_1453}>
            <View style={styles.View_1_1454}>
              <Text style={styles.Text_1_1454}>FLOWER</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3126/3446/4b7f10d6620306a8ec9cbb0450e6d29a"
            }}
            style={styles.ImageBackground_1_1455}
          />
        </View>
        <View style={styles.View_1_1459}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e00/d0aa/c06c9c78c3333d840dd74e644f06e063"
            }}
            style={styles.ImageBackground_1_1460}
          />
          <View style={styles.View_1_1461}>
            <Text style={styles.Text_1_1461}>Justine Chipman</Text>
          </View>
          <View style={styles.View_1_1462}>
            <Text style={styles.Text_1_1462}>59 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_1463}>
          <View style={styles.View_1_1464}>
            <View style={styles.View_1_1465}>
              <Text style={styles.Text_1_1465}>OG Kush</Text>
            </View>
            <View style={styles.View_1_1466}>
              <View style={styles.View_1_1467}>
                <Text style={styles.Text_1_1467}>5.0</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1526}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1528}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1530}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1532}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1534}
              />
            </View>
          </View>
          <View style={styles.View_1_1473}>
            <View style={styles.View_1_1474}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f76/f2f8/15f7377325aa835ef4692be11e9688b6"
                }}
                style={styles.ImageBackground_1_1475}
              />
            </View>
            <View style={styles.View_1_1476}>
              <View style={styles.View_1_1477}>
                <View style={styles.View_1_1478}>
                  <Text style={styles.Text_1_1478}>Energetic</Text>
                </View>
                <View style={styles.View_1_1536}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1546}
                  />
                  <View style={styles.View_1_1548}>
                    <View style={styles.View_1_1549}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_1550}
                      />
                      <View style={styles.View_1_1551} />
                      <View style={styles.View_1_1552} />
                      <View style={styles.View_1_1553} />
                      <View style={styles.View_1_1554} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1480}>
                <View style={styles.View_1_1481}>
                  <Text style={styles.Text_1_1481}>Focused</Text>
                </View>
                <View style={styles.View_1_1555}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1560}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_1562}
                  />
                </View>
              </View>
              <View style={styles.View_1_1483}>
                <View style={styles.View_1_1484}>
                  <Text style={styles.Text_1_1484}>Refreshed</Text>
                </View>
                <View style={styles.View_1_1564}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1569}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_1571}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_1486}
          />
          <View style={styles.View_1_1487}>
            <Text style={styles.Text_1_1487}>1 of 1</Text>
          </View>
          <View style={styles.View_1_1488}>
            <Text style={styles.Text_1_1488}>
              This is the bud that&#39;ll get you going. Wake and bake and start
              your day. Nothing has gotten me out of bed and ready for the world
              better than taking a few hits of the OG Kush.
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_1489} />
        <View style={styles.View_1_1573}>
          <View style={styles.View_1_1574} />
          <View style={styles.View_1_1575}>
            <Text style={styles.Text_1_1575}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_1491}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_1492}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_1494}
          />
        </View>
        <View style={styles.View_1_1497}>
          <View style={styles.View_1_1498}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_1499}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_1501}
        />
      </View>
      <View style={styles.View_1_1324}>
        <View style={styles.View_1_1325} />
        <View style={styles.View_1_1326}>
          <View style={styles.View_1_1327}>
            <View style={styles.View_1_1328}>
              <Text style={styles.Text_1_1328}>FLOWER</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3126/3446/4b7f10d6620306a8ec9cbb0450e6d29a"
            }}
            style={styles.ImageBackground_1_1329}
          />
        </View>
        <View style={styles.View_1_1333}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95e4/1f83/4f1b72bc5b4ce1ad67f7203c674d18ab"
            }}
            style={styles.ImageBackground_1_1334}
          />
          <View style={styles.View_1_1335}>
            <Text style={styles.Text_1_1335}>Chester Rodgriguez</Text>
          </View>
          <View style={styles.View_1_1336}>
            <Text style={styles.Text_1_1336}>59 Recommendations</Text>
          </View>
        </View>
        <View style={styles.View_1_1337}>
          <View style={styles.View_1_1338}>
            <View style={styles.View_1_1339}>
              <Text style={styles.Text_1_1339}>OG Kush</Text>
            </View>
            <View style={styles.View_1_1340}>
              <View style={styles.View_1_1341}>
                <Text style={styles.Text_1_1341}>5.0</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1400}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1402}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1404}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1406}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/001e/8b40/b8af786bf152a650c413b22544aea231"
                }}
                style={styles.ImageBackground_1_1408}
              />
            </View>
          </View>
          <View style={styles.View_1_1347}>
            <View style={styles.View_1_1348}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f76/f2f8/15f7377325aa835ef4692be11e9688b6"
                }}
                style={styles.ImageBackground_1_1349}
              />
            </View>
            <View style={styles.View_1_1350}>
              <View style={styles.View_1_1351}>
                <View style={styles.View_1_1352}>
                  <Text style={styles.Text_1_1352}>Energetic</Text>
                </View>
                <View style={styles.View_1_1410}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1420}
                  />
                  <View style={styles.View_1_1422}>
                    <View style={styles.View_1_1423}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7840/133f/09d4d17cfca3f0d241f05e88dfb91573"
                        }}
                        style={styles.ImageBackground_1_1424}
                      />
                      <View style={styles.View_1_1425} />
                      <View style={styles.View_1_1426} />
                      <View style={styles.View_1_1427} />
                      <View style={styles.View_1_1428} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_1354}>
                <View style={styles.View_1_1355}>
                  <Text style={styles.Text_1_1355}>Focused</Text>
                </View>
                <View style={styles.View_1_1429}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1434}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e1/20c9/8d71c3bf9a18cfd004ed3f9829321088"
                    }}
                    style={styles.ImageBackground_1_1436}
                  />
                </View>
              </View>
              <View style={styles.View_1_1357}>
                <View style={styles.View_1_1358}>
                  <Text style={styles.Text_1_1358}>Refreshed</Text>
                </View>
                <View style={styles.View_1_1438}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a0a7/433b/1d224b40fe3f3b2e4469802a2bdf4c2d"
                    }}
                    style={styles.ImageBackground_1_1443}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f475/760b/f99119904f6d41ae4f427c4ce92d1ad4"
                    }}
                    style={styles.ImageBackground_1_1445}
                  />
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8661/0eee/bc10d52ddadc02944ccd4d13688f7512"
            }}
            style={styles.ImageBackground_1_1360}
          />
          <View style={styles.View_1_1361}>
            <Text style={styles.Text_1_1361}>1 of 1</Text>
          </View>
          <View style={styles.View_1_1362}>
            <Text style={styles.Text_1_1362}>
              This is the bud that&#39;ll get you going. Wake and bake and start
              your day. Nothing has gotten me out of bed and ready for the world
              better than taking a few hits of the OG Kush.
            </Text>
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_1_1363} />
        <View style={styles.View_1_1447}>
          <View style={styles.View_1_1448} />
          <View style={styles.View_1_1449}>
            <Text style={styles.Text_1_1449}>Buying Options</Text>
          </View>
        </View>
        <View style={styles.View_1_1365}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9334/5445/98b766e2d1f6b386cb957fe1e532b1ef"
            }}
            style={styles.ImageBackground_1_1366}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/efe1/d89f/b8536a620118b7fa66a88768b85465db"
            }}
            style={styles.ImageBackground_1_1368}
          />
        </View>
        <View style={styles.View_1_1371}>
          <View style={styles.View_1_1372}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5335/1906/c86f99e11da32a246811437bd08f38a9"
              }}
              style={styles.ImageBackground_1_1373}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acb1/1e0c/80a42a3f32c736be74012728cac54b90"
          }}
          style={styles.ImageBackground_1_1375}
        />
      </View>
      <View style={styles.View_1_1233}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2a09/8b3b/413a9874d3c07caf5b8d8b33775bdbb8"
          }}
          style={styles.ImageBackground_1_1234}
        />
        <View style={styles.View_1_1235}>
          <View style={styles.View_1_1236} />
          <View style={styles.View_1_1266}>
            <View style={styles.View_1_1267}>
              <Text style={styles.Text_1_1267}>Dispensaries</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e15f/899e/5f71bfe7a14abb3a4a6f46ce887021b1"
              }}
              style={styles.ImageBackground_1_1268}
            />
            <View style={styles.View_1_1271} />
          </View>
          <View style={styles.View_1_1272}>
            <View style={styles.View_1_1273}>
              <Text style={styles.Text_1_1273}>Canna Corner</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/591b/cf46/4443b48c5d3176b8aeda096673a67fe9"
              }}
              style={styles.ImageBackground_1_1274}
            />
            <View style={styles.View_1_1283} />
          </View>
          <View style={styles.View_1_1284}>
            <View style={styles.View_1_1285}>
              <Text style={styles.Text_1_1285}>Budtender Recs</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab83/e585/6b95bd6ff51252f9b36f99edc75c68bc"
              }}
              style={styles.ImageBackground_1_1286}
            />
          </View>
          <View style={styles.View_1_1291}>
            <View style={styles.View_1_1292}>
              <Text style={styles.Text_1_1292}>Search</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f982/1cc9/335a764ef0515e755876f2abfdef984a"
              }}
              style={styles.ImageBackground_1_1293}
            />
          </View>
        </View>
        <View style={styles.View_1_1295}>
          <View style={styles.View_1_1296} />
        </View>
      </View>
      <View style={styles.View_1_1114}>
        <View style={styles.View_1_1115} />
        <View style={styles.View_1_1116}>
          <View style={styles.View_1_1117} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/854b/8964/e3ff8fc10d57640cbb45d8c534837f9a"
            }}
            style={styles.ImageBackground_1_1157}
          />
        </View>
        <View style={styles.View_1_1162}>
          <View style={styles.View_1_1163} />
          <View style={styles.View_1_1168}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0ed/67f7/ada2ec5a7c4974bb4f352ac62e63bbf5"
              }}
              style={styles.ImageBackground_1_1169}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b983/858b/813b75105f65f3c2ec9ee63e74fa723d"
              }}
              style={styles.ImageBackground_1_1173}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a60f/13cf/1b8dc0b1c1e531d5aaff2f6b97a471f0"
              }}
              style={styles.ImageBackground_1_1177}
            />
          </View>
          <View style={styles.View_1_1184}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bbc8/937c/936c1d3e893321b7422c19206af3e4c0"
              }}
              style={styles.ImageBackground_1_1185}
            />
          </View>
        </View>
        <View style={styles.View_1_1187}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0ab3/82ec/8777c7b631acafd6d247dad0f6751bda"
            }}
            style={styles.ImageBackground_1_1188}
          />
          <View style={styles.View_1_1189}>
            <View style={styles.View_1_1190}>
              <Text style={styles.Text_1_1190}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_1_1191}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/52a4/db5a/bdea9b92b5fa38134f2104f2bcedfe37"
            }}
            style={styles.ImageBackground_1_1192}
          />
          <View style={styles.View_1_1196}>
            <View style={styles.View_1_1197}>
              <Text style={styles.Text_1_1197}>1</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1_1105}>
        <View style={styles.View_1_1106} />
        <View style={styles.View_1_1107}>
          <View style={styles.View_1_1108} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2318/9131/44958314f1b1ebc5fe22ef05ec3e26f1"
            }}
            style={styles.ImageBackground_1_1109}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f08b/64b5/06da80b784c3032ea4b2d07c2fe24197"
            }}
            style={styles.ImageBackground_1_1110}
          />
        </View>
        <View style={styles.View_1_1113}>
          <Text style={styles.Text_1_1113}>Message Sent</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("646.9945355191257%") },
  View_1_2336: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87.29508196721312%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2337: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2338: {
    width: wp("33.40008341471354%"),
    minWidth: wp("33.40008341471354%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("28.00546448087431%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2339: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_2340: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.5464480874316848%")
  },
  Text_1_2340: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_2341: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.4%"),
    top: hp("0%")
  },
  View_1_2345: {
    width: wp("44%"),
    height: hp("5.46448087431694%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_2346: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2347: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("0.5464480874316848%")
  },
  Text_1_2347: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2348: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("3.005464480874309%")
  },
  Text_1_2348: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2349: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628411%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_2350: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2351: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2351: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2352: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.371584699453564%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2353: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_2353: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2413: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2415: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  ImageBackground_1_2417: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%")
  },
  ImageBackground_1_2419: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_2421: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_2359: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.223860276852804%")
  },
  View_1_2360: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2361: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2362: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.00000000000001%"),
    top: hp("1.0931629952185773%")
  },
  View_1_2363: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2364: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2364: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2424: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2434: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2436: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2437: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2438: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2439: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2440: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999993%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2441: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333324%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2442: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666656%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2366: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2367: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2367: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2443: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2448: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2450: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2369: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2370: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2370: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2452: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2457: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2459: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2372: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322402%")
  },
  View_1_2373: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.07650273224043%")
  },
  Text_1_2373: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2374: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2374: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2375: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551906%")
  },
  View_1_2461: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.78688524590163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2462: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2463: {
    width: wp("27.73333333333333%"),
    top: hp("1.5027322404371546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%")
  },
  Text_1_2463: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2377: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("3.005464480874309%")
  },
  ImageBackground_1_2378: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2380: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.4123208301314918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145956%")
  },
  View_1_2383: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_1_2384: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2385: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2387: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_2208: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("293.1693989071038%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2209: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2210: {
    width: wp("33.40008341471354%"),
    minWidth: wp("33.40008341471354%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    top: hp("28.005464480874366%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2211: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_2212: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333442%"),
    top: hp("0.5464480874316564%")
  },
  Text_1_2212: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_2213: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000006%"),
    top: hp("0%")
  },
  View_1_2217: {
    width: wp("44%"),
    height: hp("5.46448087431694%"),
    top: hp("2.4590163934426528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_2218: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2219: {
    width: wp("25.6%"),
    minWidth: wp("25.6%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("0.5464480874317132%")
  },
  Text_1_2219: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2220: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("3.005464480874309%")
  },
  Text_1_2220: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2221: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_2222: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.66120218579232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2223: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2223: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2224: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.371584699453592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2225: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_2225: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2285: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2287: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%")
  },
  ImageBackground_1_2289: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%")
  },
  ImageBackground_1_2291: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_2293: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_2231: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.22386444592081%")
  },
  View_1_2232: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2233: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2234: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("1.09316299521862%")
  },
  View_1_2235: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2236: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2236: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2296: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2306: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2308: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2309: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2310: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2311: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666757%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2312: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2313: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2314: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666677%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2238: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2239: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2239: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2315: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2320: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2322: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2241: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.480874316939833%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2242: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2242: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2324: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2329: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2331: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2244: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322403%")
  },
  View_1_2245: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.076502732240385%")
  },
  Text_1_2245: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2246: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2246: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2247: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("1.1648241569837708e-14%"),
    minHeight: hp("1.1648241569837708e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551934%")
  },
  View_1_2333: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.78688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2334: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2335: {
    width: wp("27.73333333333333%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%")
  },
  Text_1_2335: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2249: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333334%"),
    top: hp("3.005464480874366%")
  },
  ImageBackground_1_2250: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2252: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.412327083733544%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145814%")
  },
  View_1_2255: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333334%")
  },
  View_1_2256: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2257: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2259: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999999999999%")
  },
  View_1_2080: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%"),
    top: hp("429.78142076502735%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2081: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2082: {
    width: wp("33.40008341471354%"),
    minWidth: wp("33.40008341471354%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    top: hp("28.00546448087431%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2083: {
    width: wp("17.066666666666666%"),
    minWidth: wp("17.066666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_2084: {
    width: wp("11.200000000000001%"),
    minWidth: wp("11.200000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0.5464480874316564%")
  },
  Text_1_2084: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_2085: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.400000000000006%"),
    top: hp("0%")
  },
  View_1_2089: {
    width: wp("44%"),
    height: hp("5.46448087431694%"),
    top: hp("2.459016393442596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_2090: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2091: {
    width: wp("28.26666666666667%"),
    minWidth: wp("28.26666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%"),
    top: hp("0.5464480874317132%")
  },
  Text_1_2091: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2092: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%"),
    top: hp("3.005464480874309%")
  },
  Text_1_2092: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2093: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_2094: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.661202185792376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2095: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2095: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2096: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.3715846994535354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2097: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_2097: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2157: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2159: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%")
  },
  ImageBackground_1_2161: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%")
  },
  ImageBackground_1_2163: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_2165: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_2103: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.223860276852804%")
  },
  View_1_2104: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2105: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2106: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("1.093162995218563%")
  },
  View_1_2107: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2108: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2108: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2168: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2178: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2180: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2181: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2182: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2183: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2184: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2185: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2186: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666663%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2110: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2111: {
    width: wp("11.733333333333333%"),
    minWidth: wp("11.733333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2111: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2187: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2192: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2194: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2113: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.480874316939946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_2114: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2114: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2196: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2201: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2203: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2116: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.207650273223976%")
  },
  View_1_2117: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.076502732240385%")
  },
  Text_1_2117: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2118: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_2118: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2119: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("1.5530988759783612e-14%"),
    minHeight: hp("1.5530988759783612e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551877%")
  },
  View_1_2205: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.7868852459016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2206: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2207: {
    width: wp("27.73333333333333%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.199999999999996%")
  },
  Text_1_2207: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2121: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("3.005464480874309%")
  },
  ImageBackground_1_2122: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2124: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.4123291682675472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145814%")
  },
  View_1_2127: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_1_2128: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2129: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2131: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_1954: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.989071038251364%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1955: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1956: {
    width: wp("35.80008138020833%"),
    minWidth: wp("35.80008138020833%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("28.00546448087432%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1957: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_1958: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.5464480874316919%")
  },
  Text_1_1958: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_1959: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.800000000000004%"),
    top: hp("0%")
  },
  View_1_1963: {
    width: wp("45.86666666666667%"),
    height: hp("5.46448087431694%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_1964: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1965: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("0.5464480874316955%")
  },
  Text_1_1965: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1966: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("3.0054644808743163%")
  },
  Text_1_1966: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1967: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_1968: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1969: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1969: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1970: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.371584699453557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1971: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_1971: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_2030: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2032: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  ImageBackground_1_2034: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%")
  },
  ImageBackground_1_2036: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_2038: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_1977: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.223860276852804%")
  },
  View_1_1978: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1979: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1980: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.00000000000001%"),
    top: hp("1.0931629952185773%")
  },
  View_1_1981: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1982: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1982: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2040: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021865%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2050: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2052: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2053: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2054: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_2055: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2056: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999993%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2057: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333324%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_2058: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666656%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1984: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158469952%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1985: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1985: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2059: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218435%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2064: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2066: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1987: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.480874316939904%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1988: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1988: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_2068: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_2073: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_2075: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1990: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322405%")
  },
  View_1_1991: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.07650273224044%")
  },
  Text_1_1991: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1992: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1992: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1993: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551917%")
  },
  View_1_2077: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.78688524590163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_2078: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_2079: {
    width: wp("27.73333333333333%"),
    top: hp("1.5027322404371688%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%")
  },
  Text_1_2079: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1995: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("3.00546448087432%")
  },
  ImageBackground_1_1996: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1998: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.4123375064036878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145956%")
  },
  View_1_2001: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_1_2002: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2003: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_2005: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.00546448087432%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_1828: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("223.9071038251366%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1829: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1830: {
    width: wp("35.80008138020833%"),
    minWidth: wp("35.80008138020833%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("28.00546448087431%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1831: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_1832: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.5464480874317132%")
  },
  Text_1_1832: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_1833: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.800000000000004%"),
    top: hp("0%")
  },
  View_1_1837: {
    width: wp("45.86666666666667%"),
    height: hp("5.46448087431694%"),
    top: hp("2.4590163934426528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_1838: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1839: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("0.5464480874316564%")
  },
  Text_1_1839: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1840: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("3.005464480874309%")
  },
  Text_1_1840: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1841: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_1842: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1843: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1843: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1844: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.3715846994535354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1845: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_1845: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1904: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1906: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  ImageBackground_1_1908: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%")
  },
  ImageBackground_1_1910: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_1912: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_1851: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.22386444592081%")
  },
  View_1_1852: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1853: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1854: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.00000000000001%"),
    top: hp("1.09316299521862%")
  },
  View_1_1855: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1856: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1856: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1914: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1924: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1926: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1927: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1928: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1929: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1930: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999993%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1931: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333324%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1932: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666656%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1858: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1859: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1859: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1933: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1938: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1940: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1861: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1862: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1862: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1942: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1947: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1949: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1864: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322403%")
  },
  View_1_1865: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.07650273224044%")
  },
  Text_1_1865: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1866: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1866: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1867: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("1.5530988759783612e-14%"),
    minHeight: hp("1.5530988759783612e-14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551934%")
  },
  View_1_1951: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.78688524590163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1952: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1953: {
    width: wp("27.73333333333333%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%")
  },
  Text_1_1953: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1869: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("3.005464480874309%")
  },
  ImageBackground_1_1870: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1872: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.41232916826763244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145956%")
  },
  View_1_1875: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_1_1876: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1877: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1879: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_1702: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%"),
    top: hp("567.2131147540983%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1703: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1704: {
    width: wp("35.80008138020833%"),
    minWidth: wp("35.80008138020833%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    top: hp("28.005464480874252%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1705: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_1706: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0.5464480874317132%")
  },
  Text_1_1706: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_1707: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("0%")
  },
  View_1_1711: {
    width: wp("45.86666666666667%"),
    height: hp("5.46448087431694%"),
    top: hp("2.4590163934426528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_1712: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1713: {
    width: wp("30.933333333333334%"),
    minWidth: wp("30.933333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%"),
    top: hp("0.5464480874315996%")
  },
  Text_1_1713: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1714: {
    width: wp("32.53333333333333%"),
    minWidth: wp("32.53333333333333%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%"),
    top: hp("3.005464480874366%")
  },
  Text_1_1714: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1715: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_1716: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.661202185792376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1717: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1717: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1718: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.371584699453479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1719: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_1719: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1778: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1780: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%")
  },
  ImageBackground_1_1782: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%")
  },
  ImageBackground_1_1784: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_1786: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_1725: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.22386027685286%")
  },
  View_1_1726: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1727: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1728: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("1.093162995218563%")
  },
  View_1_1729: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1730: {
    width: wp("9.333333333333334%"),
    minWidth: wp("9.333333333333334%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1730: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1788: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825119935749626%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1798: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1800: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1801: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1802: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1803: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1804: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1805: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1806: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666663%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1732: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.2404204821978055%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1733: {
    width: wp("10.133333333333333%"),
    minWidth: wp("10.133333333333333%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1733: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1807: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120217654%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1812: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1814: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1735: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.480857640667637%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1736: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1736: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1816: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120219927%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1821: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1823: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1738: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322409%")
  },
  View_1_1739: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.07650273224044%")
  },
  Text_1_1739: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1740: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1740: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1741: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551934%")
  },
  View_1_1825: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.78688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1826: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1827: {
    width: wp("27.73333333333333%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.199999999999996%")
  },
  Text_1_1827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1743: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("3.0054644808742523%")
  },
  ImageBackground_1_1744: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1746: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.4123208301316481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145814%")
  },
  View_1_1749: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.0054644808742523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_1_1750: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1751: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1753: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.0054644808742523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_1576: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("155.60109289617486%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1577: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1578: {
    width: wp("35.80008138020833%"),
    minWidth: wp("35.80008138020833%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.800000000000004%"),
    top: hp("28.00546448087431%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1579: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_1580: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.93333333333333%"),
    top: hp("0.5464480874317132%")
  },
  Text_1_1580: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_1581: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.800000000000004%"),
    top: hp("0%")
  },
  View_1_1585: {
    width: wp("44%"),
    height: hp("5.46448087431694%"),
    top: hp("2.4590163934426243%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_1586: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1587: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("0.5464480874316848%")
  },
  Text_1_1587: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1588: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("3.005464480874309%")
  },
  Text_1_1588: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1589: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_1590: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.661202185792348%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1591: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1591: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1592: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.3715846994535354%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1593: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_1593: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1652: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1654: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666667%")
  },
  ImageBackground_1_1656: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%")
  },
  ImageBackground_1_1658: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_1660: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_1599: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.223860276852776%")
  },
  View_1_1600: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1601: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1602: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.00000000000001%"),
    top: hp("1.0931629952185915%")
  },
  View_1_1603: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1604: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1604: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1662: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120218506%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1672: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1674: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1675: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1676: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1677: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1678: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.999999999999993%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1679: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.533333333333324%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1680: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666656%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1606: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158469973%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1607: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1607: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1681: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1686: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1688: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1609: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.480874316939861%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1610: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1610: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1690: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.8251366120219075%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1695: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1697: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1612: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322403%")
  },
  View_1_1613: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.07650273224044%")
  },
  Text_1_1613: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1614: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1614: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1615: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551906%")
  },
  View_1_1699: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.78688524590163%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1700: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1701: {
    width: wp("27.73333333333333%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%")
  },
  Text_1_1701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1617: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("3.005464480874309%")
  },
  ImageBackground_1_1618: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1620: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.4123208301314776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145956%")
  },
  View_1_1623: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_1_1624: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1625: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1627: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_1450: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666666%"),
    top: hp("361.4754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1451: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1452: {
    width: wp("35.80008138020833%"),
    minWidth: wp("35.80008138020833%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    top: hp("28.00546448087431%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1453: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_1454: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.9333333333333442%"),
    top: hp("0.5464480874317132%")
  },
  Text_1_1454: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_1455: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("0%")
  },
  View_1_1459: {
    width: wp("44%"),
    height: hp("5.46448087431694%"),
    top: hp("2.459016393442596%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_1460: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1461: {
    width: wp("29.86666666666667%"),
    minWidth: wp("29.86666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("0.5464480874317132%")
  },
  Text_1_1461: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1462: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%"),
    top: hp("3.005464480874309%")
  },
  Text_1_1462: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1463: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628397%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_1464: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.66120218579232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1465: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1465: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1466: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.371584699453592%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1467: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_1467: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1526: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1528: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%")
  },
  ImageBackground_1_1530: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333332%")
  },
  ImageBackground_1_1532: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_1534: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_1473: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.223860276852804%")
  },
  View_1_1474: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1475: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1476: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("1.093162995218563%")
  },
  View_1_1477: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1478: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1478: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1536: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1546: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1548: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1549: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1550: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1551: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666757%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1552: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1553: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1554: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666677%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1480: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158470002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1481: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1481: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1555: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1560: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1562: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1483: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.480874316939946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1484: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1484: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1564: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1569: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1571: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1486: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322403%")
  },
  View_1_1487: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.076502732240385%")
  },
  Text_1_1487: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1488: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1488: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1489: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("7.765494379891806e-15%"),
    minHeight: hp("7.765494379891806e-15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551934%")
  },
  View_1_1573: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.7868852459016%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1574: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1575: {
    width: wp("27.73333333333333%"),
    top: hp("1.502732240437183%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.2%")
  },
  Text_1_1575: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1491: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333334%"),
    top: hp("3.005464480874309%")
  },
  ImageBackground_1_1492: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1494: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.4123249991995408%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145814%")
  },
  View_1_1497: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333334%")
  },
  View_1_1498: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1499: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1501: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.39999999999999%")
  },
  View_1_1324: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.8%"),
    top: hp("498.08743169398906%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1325: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("65.57377049180327%"),
    minHeight: hp("65.57377049180327%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1326: {
    width: wp("35.80008138020833%"),
    minWidth: wp("35.80008138020833%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.8%"),
    top: hp("28.005464480874252%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1327: {
    width: wp("19.466666666666665%"),
    minWidth: wp("19.466666666666665%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 238, 226, 1)"
  },
  View_1_1328: {
    width: wp("13.600000000000001%"),
    minWidth: wp("13.600000000000001%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.933333333333337%"),
    top: hp("0.5464480874317132%")
  },
  Text_1_1328: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.14874999225139618,
    textTransform: "none"
  },
  ImageBackground_1_1329: {
    width: wp("11.000083414713542%"),
    minWidth: wp("11.000083414713542%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("0%")
  },
  View_1_1333: {
    width: wp("48.8%"),
    height: hp("5.46448087431694%"),
    top: hp("2.4590163934426528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  ImageBackground_1_1334: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1335: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%"),
    top: hp("0.5464480874316564%")
  },
  Text_1_1335: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1336: {
    width: wp("30.666666666666664%"),
    minWidth: wp("30.666666666666664%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%"),
    top: hp("3.005464480874309%")
  },
  Text_1_1336: {
    color: "rgba(117, 115, 116, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1337: {
    width: wp("90.66666666666666%"),
    height: hp("45.08196721311475%"),
    top: hp("9.972677595628454%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%")
  },
  View_1_1338: {
    width: wp("90.66666666666666%"),
    height: hp("7.377049180327869%"),
    top: hp("13.66120218579232%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1339: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1339: {
    color: "rgba(102, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1340: {
    width: wp("42.66666666666667%"),
    height: hp("3.0054644808743167%"),
    top: hp("4.371584699453479%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1341: {
    width: wp("6.666666666666667%"),
    minWidth: wp("6.666666666666667%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("0%")
  },
  Text_1_1341: {
    color: "rgba(94, 183, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1400: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1402: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%")
  },
  ImageBackground_1_1404: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%")
  },
  ImageBackground_1_1406: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_1_1408: {
    width: wp("5.333333333333334%"),
    height: hp("2.390710382513661%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%")
  },
  View_1_1347: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23.223860276852804%")
  },
  View_1_1348: {
    width: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1349: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("21.85792349726776%"),
    minHeight: hp("21.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1350: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("19.672131147540984%"),
    minHeight: hp("19.672131147540984%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("1.093162995218563%")
  },
  View_1_1351: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1352: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1352: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1410: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1420: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1422: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1423: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1424: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1425: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666615%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1426: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1427: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.53333333333333%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1428: {
    width: wp("1.3333333333333335%"),
    minWidth: wp("1.3333333333333335%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.066666666666663%"),
    top: hp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)"
  },
  View_1_1354: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("7.240437158469945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1355: {
    width: wp("14.933333333333335%"),
    minWidth: wp("14.933333333333335%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1355: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1429: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1434: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1436: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1357: {
    width: wp("42.66666666666667%"),
    height: hp("5.191256830601093%"),
    top: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1358: {
    width: wp("18.4%"),
    minWidth: wp("18.4%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1358: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1438: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.825136612021879%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1443: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1445: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_1360: {
    width: wp("42.66666666666667%"),
    minWidth: wp("42.66666666666667%"),
    height: hp("5.8743169398907105%"),
    minHeight: hp("5.8743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.20765027322403%")
  },
  View_1_1361: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("42.076502732240385%")
  },
  Text_1_1361: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1362: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    minHeight: hp("9.699453551912567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_1_1362: {
    color: "rgba(37, 37, 37, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1363: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("21.584699453551934%")
  },
  View_1_1447: {
    width: wp("90.66666666666666%"),
    minWidth: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8%"),
    top: hp("57.78688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1448: {
    width: wp("90.66666666666666%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(152, 13, 0, 1)",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_1_1449: {
    width: wp("27.73333333333333%"),
    top: hp("1.5027322404371262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.199999999999996%")
  },
  Text_1_1449: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1365: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.13333333333333%"),
    top: hp("3.005464480874309%")
  },
  ImageBackground_1_1366: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1368: {
    width: wp("1.379327901204427%"),
    height: hp("1.3887410606842876%"),
    top: hp("0.4123208301315344%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9769978841145814%")
  },
  View_1_1371: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.13333333333333%")
  },
  View_1_1372: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1373: {
    width: wp("5.203251647949219%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_1375: {
    width: wp("6.4015752156575525%"),
    height: hp("2.73224043715847%"),
    top: hp("3.005464480874309%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.4%")
  },
  View_1_1233: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("635.5191256830601%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1234: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1235: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.1366120218578999%")
  },
  View_1_1236: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1266: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.666666666666664%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1267: {
    width: wp("15.2%"),
    top: hp("3.6885245901638655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_1267: {
    color: "rgba(57, 58, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1268: {
    width: wp("5.333333333333334%"),
    height: hp("2.726548356436641%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.06666666666667%")
  },
  View_1_1271: {
    width: wp("3.0399998982747394%"),
    height: hp("1.639344262295082%"),
    top: hp("-0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.000000000000007%"),
    backgroundColor: "rgba(198, 44, 44, 1)"
  },
  View_1_1272: {
    width: wp("16.53333333333333%"),
    minWidth: wp("16.53333333333333%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.13333333333333%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1273: {
    width: wp("16.53333333333333%"),
    top: hp("3.6885245901638655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_1273: {
    color: "rgba(57, 58, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1274: {
    width: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.6000000000000085%")
  },
  View_1_1283: {
    width: wp("3.0399998982747394%"),
    height: hp("1.639344262295082%"),
    top: hp("-0.6830601092896131%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.800000000000004%"),
    backgroundColor: "rgba(198, 44, 44, 1)"
  },
  View_1_1284: {
    width: wp("18.666666666666668%"),
    minWidth: wp("18.666666666666668%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.533333333333333%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1285: {
    width: wp("18.666666666666668%"),
    top: hp("3.6885245901638655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_1285: {
    color: "rgba(152, 13, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1286: {
    width: wp("5.334006754557292%"),
    height: hp("2.73224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666668%")
  },
  View_1_1291: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.66666666666667%"),
    top: hp("1.3661202185792263%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1292: {
    width: wp("8%"),
    top: hp("3.6885245901638655%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_1_1292: {
    color: "rgba(57, 58, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_1293: {
    width: wp("5.333333333333334%"),
    height: hp("2.732224282019777%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333286%")
  },
  View_1_1295: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.650273224043758%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1296: {
    width: wp("35.733333333333334%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.266666666666666%"),
    top: hp("2.8688524590163524%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_1114: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1115: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16.256830601092894%"),
    minHeight: hp("16.256830601092894%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_1_1116: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.0109289617486334%")
  },
  View_1_1117: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10.245901639344263%"),
    minHeight: hp("10.245901639344263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_1_1157: {
    width: wp("24%"),
    height: hp("7.519830901766084%"),
    top: hp("0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666666%")
  },
  View_1_1162: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1163: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-0.273224043715847%")
  },
  View_1_1168: {
    width: wp("17.7763671875%"),
    minWidth: wp("17.7763671875%"),
    height: hp("2.8233038271711175%"),
    minHeight: hp("2.8233038271711175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.3111083984375%"),
    top: hp("1.092896174863388%")
  },
  ImageBackground_1_1169: {
    width: wp("6.487476603190104%"),
    minWidth: wp("6.487476603190104%"),
    height: hp("1.5482695376286741%"),
    minHeight: hp("1.5482695376286741%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.288891601562511%"),
    top: hp("1.2750344198258194%")
  },
  ImageBackground_1_1173: {
    width: wp("4.072633616129558%"),
    minWidth: wp("4.072633616129558%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.873885091145837%"),
    top: hp("1.2746675418374316%")
  },
  ImageBackground_1_1177: {
    width: wp("4.533333333333333%"),
    minWidth: wp("4.533333333333333%"),
    height: hp("1.4571949432456428%"),
    minHeight: hp("1.4571949432456428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.3205606429303278%")
  },
  View_1_1184: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.600008138020833%"),
    top: hp("1.639344262295082%")
  },
  ImageBackground_1_1185: {
    width: wp("14.399999999999999%"),
    minWidth: wp("14.399999999999999%"),
    height: hp("2.8688524590163933%"),
    minHeight: hp("2.8688524590163933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_1187: {
    width: wp("10.666666666666668%"),
    minWidth: wp("10.666666666666668%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("9.153005464480875%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1188: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.8264556426168137%"),
    minHeight: hp("2.8264556426168137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666657%"),
    top: hp("1.3661202185792352%")
  },
  View_1_1189: {
    width: wp("5.066666666666666%"),
    minWidth: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5333333333333314%"),
    top: hp("-0.27322404371584774%"),
    backgroundColor: "rgba(198, 44, 44, 1)"
  },
  View_1_1190: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    top: hp("0.4098360655737707%")
  },
  Text_1_1190: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1191: {
    width: wp("6.666666666666667%"),
    height: hp("3.8422131147540983%"),
    top: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_1192: {
    width: wp("6.666666666666667%"),
    height: hp("3.8422131147540983%"),
    top: hp("0.13661202185792298%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_1196: {
    width: wp("5.066666666666666%"),
    height: hp("2.73224043715847%"),
    top: hp("-0.9562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.13333333333334%"),
    backgroundColor: "rgba(198, 44, 44, 1)"
  },
  View_1_1197: {
    width: wp("1.866666666666667%"),
    minWidth: wp("1.866666666666667%"),
    minHeight: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6000000000000085%"),
    top: hp("0.4098360655737707%")
  },
  Text_1_1197: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_1105: {
    width: wp("75.46666666666667%"),
    minWidth: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.8%"),
    top: hp("-9.562841530054644%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_1106: {
    width: wp("75.46666666666667%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(235, 247, 238, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_1_1107: {
    width: wp("8.799999999999999%"),
    height: hp("4.508196721311475%"),
    top: hp("1.1383890454234962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2222330729166657%")
  },
  View_1_1108: {
    width: wp("8.799999999999999%"),
    height: hp("4.508196721311475%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(94, 183, 0, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  ImageBackground_1_1109: {
    width: wp("6.133333333333333%"),
    height: hp("3.1420765027322406%"),
    top: hp("0.6830601092896185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333321%")
  },
  ImageBackground_1_1110: {
    width: wp("3.4666666666666663%"),
    height: hp("1.366120218579235%"),
    top: hp("1.5938513917349724%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.666666666666668%")
  },
  View_1_1113: {
    width: wp("24.266666666666666%"),
    top: hp("2.1857923497267757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.35556640625%")
  },
  Text_1_1113: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
