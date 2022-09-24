import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const NFTTitle = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
      <Text style={{ fontFamily: FONTS.regular, fontSize: subTitleSize, color: COLORS.primary }}>{subTitle}</Text>
    </View>
  )
}

export const EthPrice = ({ price }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image 
            source={assets.eth}
            resizeMode='contain'
            style={{ width:20, height: 20, marginRight: 2 }}
        />
        <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary
        }}>
            {price}
        </Text>
      </View>
    )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
      <Image 
        source={imgUrl}
        resizeMode='contain'
        style={{
            width:48,
            height:48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
      />
    )
}

export const People = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
            <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
        )) }
      </View>
    )
}

export const EndDate = () => {

    const [hours, setHours] = useState(Math.floor(Math.random() * 25))
    const [minutes, setMinutes] = useState(Math.floor(Math.random() * 61) +1)

    return (
      <View
        style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            ...SHADOWS.light,
            elevation:1,
            maxWidth: '50%'
        }}
      >
        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>Ending in</Text>
        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.medium, color: COLORS.primary }}>{hours}h {minutes}min</Text>
      </View>
    )
}

export const SubInfo = () => {
    return (
      <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <People />
        <EndDate />
      </View>
    )
}