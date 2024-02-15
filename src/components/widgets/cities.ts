import { computed } from "vue";
import taiwanCities from '@/data/taiwanCities';

// 縣市列表
export const cities = computed(() => taiwanCities.map((item) => item.name
));
