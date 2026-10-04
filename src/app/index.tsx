import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
    fontFamilies,
    neutralPalette,
    primaryPalette,
    semanticPalette,
    themeColors,
} from '../theme';

const typeScale = [
  { label: 'H1', sample: 'Page / Screen Title', size: '32px', weight: 'Bold', lineHeight: '1.2' },
  { label: 'H2', sample: 'Section Title', size: '24px', weight: 'SemiBold', lineHeight: '1.3' },
  { label: 'H3', sample: 'Card / Module Title', size: '20px', weight: 'SemiBold', lineHeight: '1.3' },
  { label: 'H4', sample: 'Subheading', size: '16px', weight: 'Medium', lineHeight: '1.4' },
  { label: 'Body Large', sample: 'Important content', size: '16px', weight: 'Regular', lineHeight: '1.6' },
  { label: 'Body Medium', sample: 'Body text', size: '14px', weight: 'Regular', lineHeight: '1.6' },
  { label: 'Body Small', sample: 'Supporting text', size: '13px', weight: 'Regular', lineHeight: '1.6' },
  { label: 'Caption', sample: 'Labels, meta text', size: '11px', weight: 'Regular', lineHeight: '1.4' },
];

export default function Index() {
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.grid}>
          <View style={styles.column}>
            <SectionHeader title="BRAND" />
            <View style={styles.logoRow}>
              <BrandMark />
              <Text style={[styles.logoText, { fontFamily: fontFamilies.bold }]}>lingua</Text>
            </View>

            <SectionHeader title="COLORS" />

            <Text style={styles.groupTitle}>PRIMARY</Text>
            <View style={styles.swatchRow}>
              {primaryPalette.map((item) => (
                <ColorTile key={item.name} color={item.tone} label={item.name} hex={item.hex} />
              ))}
            </View>

            <Text style={styles.groupTitle}>SEMANTIC</Text>
            <View style={styles.swatchRow}>
              {semanticPalette.map((item) => (
                <ColorTile key={item.name} color={item.tone} label={item.name} hex={item.hex} />
              ))}
            </View>

            <Text style={styles.groupTitle}>NEUTRALS</Text>
            <View style={styles.swatchRow}>
              {neutralPalette.map((item) => (
                <ColorTile key={item.name} color={item.tone} label={item.name} hex={item.hex} />
              ))}
            </View>
          </View>

          <View style={styles.column}>
            <SectionHeader title="TYPOGRAPHY" />

            <Text style={styles.captionLabel}>FONT FAMILY</Text>
            <Text style={[styles.displayText, { fontFamily: fontFamilies.bold }]}>Poppins</Text>
            <Text style={styles.description}>
              Poppins is a modern, geometric sans-serif typeface that provides excellent readability and a friendly personality.
            </Text>

            <View style={styles.typeList}>
              {typeScale.map((item) => (
                <TypographyRow
                  key={item.label}
                  label={item.label}
                  sample={item.sample}
                  size={item.size}
                  weight={item.weight}
                  lineHeight={item.lineHeight}
                />
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={[styles.sectionTitle, { fontFamily: fontFamilies.bold }]}>{title}</Text>
    </View>
  );
}

function ColorTile({ color, label, hex }: { color: string; label: string; hex: string }) {
  return (
    <View style={styles.swatchItem}>
      <View style={[styles.colorSwatch, { backgroundColor: color }]} />
      <Text style={[styles.swatchLabel, { fontFamily: fontFamilies.medium }]}>{label}</Text>
      <Text style={styles.hexText}>{hex}</Text>
    </View>
  );
}

function TypographyRow({
  label,
  sample,
  size,
  weight,
  lineHeight,
}: {
  label: string;
  sample: string;
  size: string;
  weight: string;
  lineHeight: string;
}) {
  return (
    <View style={styles.typeRow}>
      <Text style={[styles.typeLabel, { fontFamily: fontFamilies.bold }]}>{label}</Text>
      <Text style={styles.typeSample}>{sample}</Text>
      <Text style={styles.typeMeta}>{size}</Text>
      <Text style={styles.typeMeta}>{weight}</Text>
      <Text style={styles.typeMeta}>{lineHeight}</Text>
    </View>
  );
}

function BrandMark() {
  return (
    <View style={styles.brandMark}>
      <View style={[styles.ear, styles.earLeft]} />
      <View style={[styles.ear, styles.earRight]} />
      <View style={styles.head}>
        <View style={styles.face} />
        <View style={styles.eyeLeft} />
        <View style={styles.eyeRight} />
        <View style={styles.muzzle} />
        <View style={styles.nose} />
      </View>
      <View style={[styles.tail, styles.tailLeft]} />
      <View style={[styles.tail, styles.tailRight]} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f6f7f8',
  },
  scrollContent: {
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    maxWidth: 1320,
    width: '100%',
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  column: {
    flex: 1,
    minWidth: 330,
    maxWidth: 620,
  },
  sectionHeader: {
    borderBottomWidth: 1,
    borderBottomColor: '#dfe3e7',
    paddingBottom: 10,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 18,
    letterSpacing: 0.5,
    color: themeColors.brand.blue,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 22,
    paddingTop: 10,
    paddingBottom: 36,
  },
  logoText: {
    fontSize: 62,
    lineHeight: 68,
    color: themeColors.neutral.textPrimary,
    letterSpacing: -2.4,
  },
  brandMark: {
    position: 'relative',
    width: 88,
    height: 88,
  },
  ear: {
    position: 'absolute',
    width: 22,
    height: 22,
    backgroundColor: '#1f1f1f',
    borderRadius: 6,
    top: -2,
    transform: [{ rotate: '45deg' }],
    zIndex: 1,
  },
  earLeft: {
    left: 14,
  },
  earRight: {
    right: 14,
  },
  head: {
    position: 'absolute',
    left: 10,
    top: 8,
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: themeColors.brand.foxOrange,
    zIndex: 2,
  },
  face: {
    position: 'absolute',
    left: 12,
    right: 12,
    top: 14,
    bottom: 16,
    borderRadius: 30,
    backgroundColor: '#f8f2ee',
  },
  eyeLeft: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1a1a1a',
    left: 22,
    top: 25,
  },
  eyeRight: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1a1a1a',
    right: 22,
    top: 25,
  },
  muzzle: {
    position: 'absolute',
    left: 18,
    right: 18,
    bottom: 12,
    height: 18,
    borderRadius: 16,
    backgroundColor: '#f8f2ee',
  },
  nose: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1a1a1a',
    left: 29,
    bottom: 18,
  },
  tail: {
    position: 'absolute',
    width: 26,
    height: 22,
    backgroundColor: themeColors.brand.foxOrange,
    borderRadius: 14,
    bottom: 2,
    transform: [{ rotate: '18deg' }],
    zIndex: 1,
  },
  tailLeft: {
    left: -2,
  },
  tailRight: {
    right: -2,
  },
  groupTitle: {
    color: themeColors.brand.blue,
    fontFamily: fontFamilies.bold,
    fontSize: 12,
    letterSpacing: 0.8,
    marginTop: 24,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  swatchRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 16,
  },
  swatchItem: {
    width: 120,
  },
  colorSwatch: {
    width: 118,
    height: 82,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#dfe1e6',
    marginBottom: 8,
  },
  swatchLabel: {
    fontSize: 12,
    letterSpacing: 0.8,
    color: themeColors.neutral.textPrimary,
    marginBottom: 3,
    textTransform: 'uppercase',
  },
  hexText: {
    fontSize: 12,
    color: themeColors.neutral.textSecondary,
    fontFamily: fontFamilies.regular,
  },
  captionLabel: {
    marginTop: 8,
    marginBottom: 16,
    fontFamily: fontFamilies.bold,
    fontSize: 12,
    color: themeColors.brand.blue,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  displayText: {
    fontSize: 62,
    lineHeight: 66,
    color: themeColors.neutral.textPrimary,
    letterSpacing: -2.4,
  },
  description: {
    maxWidth: 430,
    marginTop: 18,
    fontSize: 17,
    lineHeight: 26,
    color: themeColors.neutral.textSecondary,
    fontFamily: fontFamilies.regular,
  },
  typeList: {
    marginTop: 28,
  },
  typeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#ebedf1',
    gap: 10,
  },
  typeLabel: {
    width: 96,
    fontSize: 18,
    color: themeColors.neutral.textPrimary,
  },
  typeSample: {
    flex: 1,
    fontSize: 15,
    color: themeColors.neutral.textSecondary,
    fontFamily: fontFamilies.regular,
    textAlign: 'left',
  },
  typeMeta: {
    width: 50,
    textAlign: 'right',
    fontSize: 13,
    color: themeColors.neutral.textSecondary,
    fontFamily: fontFamilies.regular,
  },
});

