import * as React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={require('./assets/sx.jpg')}
          style={styles.imagestyle}>
          <Text style={styles.textstyle}>The Space Race</Text>
          <View style={{ marginTop: RFValue(145), backgroundColor: 'black' }}>
            <Text style={styles.textstyle2}>Introduction</Text>
            <Text style={styles.textStyle3}>
              Hello, my name is Rajdeep Singh, and I am a 9 class student of
              St.Xavier's high school, Gondia. And I am here to give you all of
              my knowledge about the space race and tell you all the fantastic
              facts about the space race, which only a few people know. So
              please stick around with me till the end to learn about the space
              race and know some fantastic facts about the space race.{' '}
            </Text>
            <Text style={styles.textstyle2}>1.Space race timeline </Text>
            <Text style={styles.textStyle3}>
              The Space Race between the United States (US) and the Soviet Union
              (USSR) was a remarkable time in history with many far-reaching
              achievements in science, space exploration, and technology. This
              timeline shows the twenty-year competition between the two
              nations.
            </Text>
            <Text style={styles.textstyle6}>1.1 Launch Of the Sputnik</Text>
            <Image
              source={require('./assets/sputnik.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(200),
                width: RFValue(200),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle4}>
              2 August 1955:The USSR responds to the US announcement that they
              intend to launch the first artificial satellite into space with a
              satellite of their own.
            </Text>
            <Text style={styles.textStyle5}>
              4 October 1957: The USSR successfully launches Sputnik 1, the
              first Earth-orbiting satellite in history.
              <Text style={{ marginLeft: RFValue(100), fontSize: RFValue(15) }}>
                (Points of USSR=0+1=1)
              </Text>
            </Text>
            <Image
              source={require('./assets/Sputnik2.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(200),
                width: RFValue(330),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              3 November 1957: The USSR successfully launches Sputnik 2,
              carrying a dog named Laika into space. They become the first
              nation to successfully send a living organism into orbit.
              <Text style={{ marginLeft: RFValue(20), fontSize: RFValue(15) }}>
                (Points of USSR=1+1=2)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>
              1.2 Entry of the US & Launch of Explorer
            </Text>
            <Image
              source={require('./assets/exploral1.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(330),
                width: RFValue(330),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              31 January 1958: The US enter the Space Race by launching Explorer
              1, the first US satellite to reach orbit. It carried experimental
              equipment that led to the discovery of the Van Allen radiation
              belt.
              <Text style={{ fontSize: RFValue(15) }}>
                (Points of USA=0+1=1)
              </Text>
            </Text>
            <Text style={styles.textStyle5}>
              1 October 1958: The National Aeronautics and Space Administration
              (NASA) is created in the US, replacing the National Advisory
              Committee on Aeronautics (NACA).
            </Text>
            <Image
              source={require('./assets/fcs.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(440),
                width: RFValue(330),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              18 December 1958: The US launch SCORE, the world's first
              communications satellite. It captured world attention by
              broadcasting a pre-recorded Christmas message from US President
              Dwight D. Eisenhower, becoming the first broadcast of a human
              voice from space.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USA=1+1=2)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>1.2 Launch of The Luna</Text>
            <Image
              source={require('./assets/luna1.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(440),
                width: RFValue(330),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              2 January 1959: The USSR launches Luna 1, known as the first
              "cosmic rocket" as it accidentally escaped the orbit of the Moon
              due to the object having too much speed. Luna 1 becomes the first
              human-made object to leave the orbit of the Earth and orbit the
              sun instead.
              <Text style={{ fontSize: RFValue(15) }}>
                (Points of USSR=2+1=3)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>1.3 Launch of The Explorer 6 </Text>
            <Image
              source={require('./assets/exploral6.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(200),
                width: RFValue(130),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              2 August 1959: The US launches Explorer 6, the world's first
              weather satellite and obtains the first pictures of Earth from
              space.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USA=2+1=3)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>1.4 Launch of Luna 2 & 3 </Text>
            <Image
              source={require('./assets/luna2.png')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(222),
                width: RFValue(100),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              12 September 1959: The USSR launches Luna 2 and accomplishes its
              mission of creating the first spacecraft to reach the surface of
              the Moon. space.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USSR=3+1=4)
              </Text>
            </Text>
            <Image
              source={require('./assets/luna3.png')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(200),
                width: RFValue(330),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              4 October 1959: The USSR launches Luna 3 and succeeds in their
              mission of sending an object into orbit around the Moon and
              photographing the far side of the Moon.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USSR=4+1=5)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>1.5 Launch of Sputnik 5 </Text>
            <Text style={styles.textStyle5}>
              19 August 1960:The Soviet Union launched Sputnik 5 into orbit,
              with the dogs Belka and Strelka (Russian for "Squirrel" and
              "Little Arrow"), 40 mice, 2 rats and a variety of plants.
              Recovered the next day after 18 orbits, the menagerie became the
              first living animals to return safely to Earth after being placed
              into orbit.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USSR=5+1=6)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>1.6 Ham went to space </Text>
            <Image
              source={require('./assets/ham.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(330),
                width: RFValue(230),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              31 January 1961: Ham, a US chimpanzee, becomes the first hominid
              (or great ape) in space and the first to successfully survive the
              landing.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USA=3+1=4)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>
              1.7 Launch of Vostok1 and Yuri Gagarin went to space{' '}
            </Text>
            <Image
              source={require('./assets/vostok1.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(300),
                width: RFValue(250),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              12 April 1961: The Soviet Union achieve a clear triumph in the
              Space Race. Launched the Vostok 1, Yuri Gagarin makes a single
              orbit around the Earth and becomes the first man to reach space.
              He remained in space for one hour and forty-eight minutes before
              landing in Saratov Oblast, west Russia.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USSR=6+1=7)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>1.8 Alen Shepard</Text>
            <Image
              source={require('./assets/as.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(260),
                width: RFValue(330),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              5 May 1961: The US achieve the first pilot-controlled journey and
              first American in space with Alan Shepard aboard the
              Mercury-Redstone 3 (or Freedom 7) spacecraft. On this flight,
              Shepard did not orbit Earth. He flew 116 miles high. The flight
              lasted about 15 minutes.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USA=4+1=5)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>1.9 First woman in space </Text>
            <Image
              source={require('./assets/vt.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(260),
                width: RFValue(330),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              16 June 1963: Valentina Tereshkova becomes the first civilian and
              first woman in space. She spends almost three days in space,
              orbiting the Earth 48 times aboard her spacecraft, Vostok 6.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USSR=7+1=8)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>1.91 The first spacewalk </Text>
            <Image
              source={require('./assets/al.png')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(260),
                width: RFValue(330),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              18 March 1965: Alexei Leonov leaves his spacecraft, the Voskhod 2,
              in a specialized spacesuit and conducts a twelve-minute spacewalk,
              the first of its kind.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USSR=8+1=9)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>
              1.92 Mariner 4 successful voyage{' '}
            </Text>
            <Text style={styles.textStyle5}>
              14 July 1965: The US satellite, Mariner 4, performs the first
              successful voyage to the planet Mars, returning the first close-up
              images of the Martian surface.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USSR=9+1=10)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>
              1.93 The most deadly year of The Space Race{' '}
            </Text>
            <Text style={styles.textStyle5}>
              1967: This year proves the most deadly of the Space Race for both
              the US and Soviet Union. In January, American astronauts Ed White,
              Gus Grissom, and Roger Chaffee die when a fire ignited in their
              Apollo 1 capsule on the launch pad. Only a few months later the
              Soviet cosmonaut Vladimir Komarov is also killed when the
              parachute on his Soyuz 1 capsule fails to open on his reentry into
              Earth's atmosphere.
            </Text>
            <Text style={styles.textstyle6}>1.92 Apollo 8 & 11</Text>
            <Text style={styles.textStyle5}>
              21 December 1968: US spacecraft Apollo 8 becomes the first
              human-crewed spacecraft to reach the Moon, orbit it, and
              successfully return to Earth.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USA=5+1=6)
              </Text>
            </Text>
            <Image
              source={require('./assets/apollo11.jpg')}
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
                margin: RFValue(20),
                height: RFValue(470),
                width: RFValue(230),
                borderRadius: RFValue(10),
              }}
            />
            <Text style={styles.textStyle5}>
              16 July 1969: the Apollo 11 mission launched via a Saturn V rocket
              with Commander Neil Armstrong, command module pilot Michael
              Collins and lunar module pilot Buzz Aldrin from Kennedy Space
              Center's Launch Complex Pad 39A.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USA=6+1=7)
              </Text>
            </Text>
            <Text style={styles.textStyle5}>
              {' '}
              20 July 1969: Neil Armstrong and later Edwin "Buzz" Aldrin become
              the first men to walk on the Moon while their crewmate Michael
              Collins continues to orbit the Moon aboard the Apollo 11. This
              secured a victory for America in the Space Race with a televised
              landing witnessed around the world by 723 million people.
              <Text style={{ marginLeft: RFValue(340), fontSize: RFValue(15) }}>
                (Points of USA=7+1=8)
              </Text>
            </Text>
            <Text style={styles.textstyle6}>2 What was the space race </Text>
            <Text style={styles.textStyle5}>
              The Space Race was a 20th Century struggle between two
              nation-states, the Soviet Union (USSR) and the United States (US).
              The pursuit for both was the domination of space flight
              technologies. The competition began on 2 August 1955, when the
              Soviet Union responded to the US announcement of their similar
              intent to launch artificial satellites.
            </Text>
            <Text style={styles.textStyle5}>
              The Space Race has its origins in the nuclear arms race between
              the two nations following the Second World War. Both sides were
              aided by German missile technology and scientists from their
              missile programme. The technological advantages required for such
              power were seen as necessary for national security and political
              superiority. The Space Race produced groundbreaking efforts to
              launch artificial satellites; space probes of the Moon, Venus, and
              Mars, and human space voyages in low Earth orbit and lunar
              missions.
            </Text>
            <Text style={styles.textstyle6}>3 Space race facts </Text>
            <Text style={styles.textStyle5}>
              Following are all the fact about space race.
            </Text>
            <Text style={styles.textstyle6}>3.1 Dogs were sent into space</Text>
            <Text style={styles.textStyle5}>
              While the US often sent primates on test flights, the Soviet Union
              preferred to use dogs. They were seen to be more obedient, and
              Moscow stray dogs were reckoned to be more equipped to deal with
              the extreme conditions and potential hunger of space travel.
            </Text>
            <Text style={styles.textstyle6}>
              3.2 There is a solar powered satellite
            </Text>
            <Text style={styles.textStyle5}>
              The US Navy's Vanguard 1 was the first solar-powered satellite.
              Launched on 17 March 1958, it remains the oldest human-made probe
              in orbit. Although communication with the satellite is now lost,
              it will stay in space for many years to come.
            </Text>
            <Text style={styles.textstyle6}>
              3.3 Yuri Gargarin started a tradition
            </Text>
            <Text style={styles.textStyle5}>
              On the 12 April 1961, the first man in space, Yuri Gagarin asked
              the bus driver to stop on the route to the launchpad and urinated
              against the right-hand back tyre of the bus. This act has become a
              tradition for all astronauts travelling into space. Female
              astronauts bring vials of their urine to splash on the wheel.
            </Text>
            <Text style={styles.textstyle6}>
              3.4 Astronauts were nearly cosmonauts
            </Text>
            <Text style={styles.textStyle5}>
              In the 1950s an ongoing discussion began at NASA between
              astronauts and cosmonauts. The deputy administrator wanted to name
              US travellers in space as cosmonauts, the term applied to Russian
              spacemen. He felt that "cosmos" was more applicable to space
              travel than just the term used to stars (or "Astro"). However,
              while he made a clear point, he was outvoted by his peers.
            </Text>
            <Text style={styles.textstyle6}>
              3.5 Alan Shepard played golf on the Moon
            </Text>
            <Text style={styles.textStyle5}>
              On 2 February 1971, Alan Shepard became the first human to play
              golf on the Moon. After smuggling a makeshift golf club aboard his
              Apollo 14 lunar mission, Shepard hit two balls just before
              liftoff.
            </Text>
            <Text style={styles.textstyle6}>
              3.6 The Mercury Seven were the oldest
            </Text>
            <Text style={styles.textStyle5}>
              The Mercury Seven were the group of seven astronauts that piloted
              all the crewed spaceflights of the Mercury programme, occurring
              from May 1961 to May 1963. Of the Mercury Seven, John Glenn went
              on to become a US senator and on 29 October 1998 (while still a
              senator), he became the oldest person to fly in space at the age
              of 77.
            </Text>
            <Text style={styles.textstyle6}>
              3.7 Apollo 12 was struck by lightning{' '}
            </Text>
            <Text style={styles.textStyle5}>
              On 14 November 1969, Apollo 12 was sent on its lunar mission. The
              launch was the most distressing of the Apollo programme, as a
              series of lightning strikes just after liftoff temporarily
              disabled their power and guidance systems. On stepping onto the
              lunar surface five days later, Conrad joked, "Man, that may have
              been a small one for Neil, but that's a long one for me."
            </Text>
            <Text style={styles.textstyle6}>
              3.8 The last person to walk on the Moon was Eugene Cernan{' '}
            </Text>
            <Text style={styles.textStyle5}>
              Cernan was the Mission Commander of the Apollo 17 mission that
              occurred between 11 and 14 December 11 1972. Only twelve people
              (all US astronauts) had done so before, and none have done so
              since. He walked on the Moon with geologist and astronaut,
              Harrison Schmitt.
            </Text>
            <Text style={styles.textstyle6}>
              4 Who won the space race according to experts.
            </Text>
            <Text style={styles.textStyle5}>
              With no official measure of success, the winner of the Space Race
              is a point of controversy. Most historians agree that the space
              race ended on 20 July 1969 when Neil Armstrong stepped onto the
              Moon for the first time. As the climax of space history and
              exploration, the lunar landing led to a triumph for the US.
            </Text>
            <Text style={styles.textstyle6}>
              4 Who won the space race according to Points.
            </Text>
            <Text style={styles.textStyle7}>
              According to pointing system USSR won the space race because USSR
              got 10 points and USA got 8 points.
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagestyle: {
    height: RFValue(360),
  },
  textstyle: {
    fontSize: RFValue(40),
    alignSelf: 'center',
    justifyContent: 'center',
    color: '#FFFFF0',
    marginTop: RFValue(150),
    fontFamily: 'Comic Sans MS',
  },
  imagestyle2: {
    height: RFValue(100),
    width: RFValue(100),
    marginTop: RFValue(20),
    borderRadius: RFValue(46),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textstyle2: {
    fontSize: RFValue(30),
    color: 'white',
    marginLeft: RFValue(20),
    marginTop: RFValue(60),
    fontFamily: 'Comic Sans MS',
  },
  textStyle3: {
    fontFamily: 'Comic Sans MS',
    fontSize: RFValue(20),
    marginLeft: RFValue(20),
    color: 'white',
    marginTop: RFValue(30),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textStyle4: {
    fontFamily: 'Comic Sans MS',
    fontSize: RFValue(20),
    marginLeft: RFValue(20),
    color: 'white',
    marginTop: RFValue(20),
  },
  textStyle5: {
    fontFamily: 'Comic Sans MS',
    fontSize: RFValue(20),
    marginLeft: RFValue(20),
    color: 'white',
    marginTop: RFValue(35),
  },
  textstyle6: {
    fontSize: RFValue(25),
    color: 'white',
    marginLeft: RFValue(20),
    marginTop: RFValue(30),
    fontFamily: 'Comic Sans MS',
  },
  textStyle7: {
    fontFamily: 'Comic Sans MS',
    fontSize: RFValue(20),
    marginLeft: RFValue(20),
    color: 'white',
    marginTop: RFValue(35),
    marginBottom: RFValue(30),
    margin: RFValue(10),
  },
});
