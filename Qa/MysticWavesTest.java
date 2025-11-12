import org.junit.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class MysticWavesTest {
    @Test
    public void testCountEnergy(){
        assertEquals(0, MysticWaves.countEnergy(1, 4));
        assertEquals(2, MysticWaves.countEnergy(2, 5));
        assertEquals(0, MysticWaves.countEnergy(3, 6));
        assertEquals(4, MysticWaves.countEnergy(4, 7));

    }
}
