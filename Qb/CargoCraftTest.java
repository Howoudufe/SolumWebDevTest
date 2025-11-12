import org.junit.Test;

import static org.junit.Assert.*;

public class CargoCraftTest {
    @Test
    public void testNum4(){
        CargoCraft.CraftResult r1 = CargoCraft.calculateCraftsNum(4);
        assertEquals(1, r1.minCraftsNum);
        assertEquals(1, r1.maxCraftsNum);
        assertTrue(r1.valid);
    }
    @Test
    public void testNum7(){
        CargoCraft.CraftResult r2 = CargoCraft.calculateCraftsNum(7);
        assertFalse(r2.valid);
    }
    @Test
    public void testNum24(){
        CargoCraft.CraftResult r3 = CargoCraft.calculateCraftsNum(24);
        assertEquals(4, r3.minCraftsNum);
        assertEquals(6, r3.maxCraftsNum);
        assertTrue(r3.valid);
    }
    @Test
    public void testNumLong(){
        CargoCraft.CraftResult r4 = CargoCraft.calculateCraftsNum(998244353998244352L);
        assertEquals(166374058999707392L, r4.minCraftsNum);
        assertEquals(249561088499561088L, r4.maxCraftsNum);
        assertTrue(r4.valid);
    }
}
